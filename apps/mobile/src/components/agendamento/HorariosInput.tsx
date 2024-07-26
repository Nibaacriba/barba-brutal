import { AgendaUtils, DataUtils } from "@barba/core";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import useAgendamento from "../../data/hooks/useAgendamento";

interface HorariosInputProps {
  data: Date;
  qtdeHorarios: number;
  dataMudou(data: Date): void;
}

export default function HorariosInput(props: HorariosInputProps) {
  const [horaAtual, setHoraAtual] = useState<string | null>(null);
  const { horariosOcupados } = useAgendamento();
  const { manha, tarde, noite } = AgendaUtils.horariosDoDia();

  const horaSelecionada = props.data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  function obterPeriodo(horario: string | null, qtde: number) {
    if (!horario) return [];
    const horarios = manha.includes(horario)
      ? manha
      : tarde.includes(horario)
        ? tarde
        : noite;
    const indice = horarios.findIndex((h) => horario == h);
    return horarios.slice(indice, indice + qtde);
  }

  function renderizarHorario(horario: string) {
    const periodo = obterPeriodo(horaAtual, props.qtdeHorarios);
    const temHorario = periodo.length === props.qtdeHorarios;
    const periodoSelecionado = obterPeriodo(
      horaSelecionada,
      props.qtdeHorarios
    );

    const selecionado =
      periodoSelecionado.length === props.qtdeHorarios &&
      periodoSelecionado.includes(horario);

    const periodoBloqueado = periodo.some((h) =>
      horariosOcupados.some((ocupada) => ocupada === h)
    );

    const horaIndisponivel = periodoSelecionado.includes(horario);
    const ocupado = horariosOcupados.includes(horario);

    const getBotaoProps = () => {
      let props = {
        background: "#18181b",
        desabilitado: false,
      };
      if (selecionado && !periodoBloqueado && !ocupado) {
        props.background = "#22c55e";
        return props;
      } else if (
        (periodoBloqueado && !ocupado && horaIndisponivel) ||
        (!temHorario && !ocupado && periodoSelecionado.includes(horario))
      ) {
        props.background = "#ef4444";
        return props;
      } else if (ocupado)
        return {
          background: "#09090b",
          desabilitado: true,
        };

      return props;
    };

    return (
      <Pressable
        key={horario}
        onPress={() => {
          setHoraAtual(horario);
          if (getBotaoProps().desabilitado) return;
          props.dataMudou(DataUtils.aplicarHorario(props.data, horario));
        }}
        style={{
          ...styles.horaContainer,
          backgroundColor: getBotaoProps().background,
        }}
      >
        {getBotaoProps().desabilitado ||
        getBotaoProps().background === "#ef4444" ? (
          <View style={styles.horaConteudo}>
            <Text style={{ color: "#e4e4e7" }}>X</Text>
          </View>
        ) : (
          <View style={styles.horaConteudo}>
            <Text style={{ color: "#e4e4e7" }}>{horario}</Text>
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.horasTexto}>Manhã</Text>
        <View style={styles.horasConteudo}>{manha.map(renderizarHorario)}</View>
      </View>
      <View>
        <Text style={styles.horasTexto}>Tarde</Text>
        <View style={styles.horasConteudo}>{tarde.map(renderizarHorario)}</View>
      </View>
      <View>
        <Text style={styles.horasTexto}>Noite</Text>
        <View style={styles.horasConteudo}>{noite.map(renderizarHorario)}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  horasTexto: {
    color: "#e4e4e7",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  horasConteudo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    justifyContent: "center",
  },
  horaConteudo: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  horaContainer: {
    borderWidth: 1,
    borderColor: "#27272a",
    padding: 10,
    borderRadius: 6,
    width: 90,
  },
});
