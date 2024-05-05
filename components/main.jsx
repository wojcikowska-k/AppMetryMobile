import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const rows = [
  { mb: "25 mb", twoMM: "6.0 cm", eightMM: "3.0 cm", fiveMM: "2.0 cm" },
  { mb: "50 mb", twoMM: "10.0 cm", eightMM: "5.0 cm", fiveMM: "3.0 cm" },
  { mb: "100 mb", twoMM: "16.5 cm", eightMM: "8.5 cm", fiveMM: "5.6 cm" },
  { mb: "150 mb", twoMM: "22.5 cm", eightMM: "11.5 cm", fiveMM: "8.0 cm" },
  { mb: "200 mb", twoMM: "27.5 cm", eightMM: "14.5 cm", fiveMM: "10.0 cm" },
  { mb: "250 mb", twoMM: "30.0 cm", eightMM: "17.5 cm", fiveMM: "11.7 cm" },
  { mb: "300 mb", twoMM: "33.0 cm", eightMM: "19.5 cm", fiveMM: "13.9 cm" },
  { mb: "350 mb", twoMM: "x", eightMM: "21.1 cm", fiveMM: "15.7 cm" },
  { mb: "400 mb", twoMM: "x", eightMM: "22.8 cm", fiveMM: "17.0 cm" },
  { mb: "450 mb", twoMM: "x", eightMM: "24.8 cm", fiveMM: "18.6 cm" },
  { mb: "500 mb", twoMM: "x", eightMM: "26.6 cm", fiveMM: "20.0 cm" },
  { mb: "550 mb", twoMM: "x", eightMM: "28.5 cm", fiveMM: "21.4 cm" },
  { mb: "600 mb", twoMM: "x", eightMM: "29.6 cm", fiveMM: "22.7 cm" },
  { mb: "650 mb", twoMM: "x", eightMM: "31.5 cm", fiveMM: "23.7 cm" },
  { mb: "700 mb", twoMM: "x", eightMM: "32.6 cm", fiveMM: "24.9 cm" },
  { mb: "750 mb", twoMM: "x", eightMM: "34.4 cm", fiveMM: "26.3 cm" },
  { mb: "800 mb", twoMM: "x", eightMM: "x", fiveMM: "27.2 cm" },
  { mb: "850 mb", twoMM: "x", eightMM: "x", fiveMM: "28.1 cm" },
  { mb: "900 mb", twoMM: "x", eightMM: "x", fiveMM: "29.4 cm" },
];

const rows2 = [
  { mb: "25 mb", oneFiveMM: "x", oneTwoMM: "x", oneZeroMM: "2.5 cm" },
  { mb: "50 mb", oneFiveMM: "8.0 cm", oneTwoMM: "5.5 cm", oneZeroMM: "6.0 cm" },
  {
    mb: "100 mb",
    oneFiveMM: "13.5 cm",
    oneTwoMM: "10.5 cm",
    oneZeroMM: "10.3 cm",
  },
  { mb: "150 mb", oneFiveMM: "x", oneTwoMM: "x", oneZeroMM: "13.7 cm" },
  { mb: "200 mb", oneFiveMM: "x", oneTwoMM: "x", oneZeroMM: "16.7 cm" },
  { mb: "250 mb", oneFiveMM: "x", oneTwoMM: "x", oneZeroMM: "19.5 cm" },
  { mb: "300 mb", oneFiveMM: "x", oneTwoMM: "x", oneZeroMM: "21.7 cm" },
];

export const Main = () => {
  const [veneerThickness, setVeneerThickness] = useState("0.8");
  const [rollThickness, setRollThickness] = useState("");
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const calculate = () => {
    Keyboard.dismiss();
    let total = 0;
    const thickness = parseFloat(veneerThickness);
    const rollThicknessValue = parseFloat(rollThickness);

    if (thickness === 0.5) {
      total =
        59.129 * Math.pow(rollThicknessValue, 2) +
        1307.8 * rollThicknessValue +
        500.31;
    } else if (thickness === 0.8) {
      total =
        41.435 * Math.pow(rollThicknessValue, 2) +
        770.66 * rollThicknessValue +
        70.674;
    } else if (thickness === 1.0) {
      total =
        40.083 * Math.pow(rollThicknessValue, 2) +
        462.91 * rollThicknessValue +
        983.99;
    } else if (thickness === 1.2) {
      total = 2.0001 * rollThicknessValue + 0.5006;
    } else if (thickness === 1.5) {
      total = 2.0005 * rollThicknessValue + 2.504;
    } else if (thickness === 2.0) {
      total =
        23.048 * Math.pow(rollThicknessValue, 2) +
        82.342 * rollThicknessValue +
        1595.7;
    }

    setCalculatedValue(`${Math.round(total / 100)} mb`);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerCell}>MB</Text>
      <Text style={styles.headerCell}>2,0 mm</Text>
      <Text style={styles.headerCell}>0,8 mm</Text>
      <Text style={styles.headerCell}>0,5 mm</Text>
    </View>
  );
  const renderHeader2 = () => (
    <View style={styles.header}>
      <Text style={styles.headerCell}>MB</Text>
      <Text style={styles.headerCell}>1,5 mm</Text>
      <Text style={styles.headerCell}>1,2 mm</Text>
      <Text style={styles.headerCell}>1,0 mm</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainerTables}>
        <TouchableOpacity
          style={styles.buttonTable}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.buttonText}>Tabela: 2.0mm, 0.8mm, 0.5mm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTable}
          onPress={() => setIsModalVisible2(true)}
        >
          <Text style={styles.buttonText}>Tabela: 1.5mm, 1.2mm, 1.0mm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Wybierz grubość okleiny</Text>
        <Picker
          selectedValue={veneerThickness}
          onValueChange={setVeneerThickness}
          style={styles.picker}
          mode="dropdown"
        >
          <Picker.Item label="0.8 mm" value="0.8" />
          <Picker.Item label="2.0 mm" value="2.0" />
          <Picker.Item label="0.5 mm" value="0.5" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Grubość rolki</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRollThickness}
          value={rollThickness}
          placeholder="podaj grubość w cm"
          keyboardType="numeric"
          onSubmitEditing={calculate}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => calculate()}>
            Policz
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerCell}>{calculatedValue}</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={rows}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={renderHeader}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.mb}</Text>
                  <Text style={styles.cell}>{item.twoMM}</Text>
                  <Text style={styles.cell}>{item.eightMM}</Text>
                  <Text style={styles.cell}>{item.fiveMM}</Text>
                </View>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={() => setIsModalVisible2(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setIsModalVisible2(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={rows2}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={renderHeader2}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.mb}</Text>
                  <Text style={styles.cell}>{item.oneFiveMM}</Text>
                  <Text style={styles.cell}>{item.oneTwoMM}</Text>
                  <Text style={styles.cell}>{item.oneZeroMM}</Text>
                </View>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: "90%",
    gap: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  picker: {
    backgroundColor: "#F0F0F0",
    color: "#000",
    borderRadius: 5,
  },
  inputContainerTables: {
    marginBottom: 20,
    gap: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F0F0F0",
    color: "#000",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonTable: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  resultContainer: {
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },

  //styles for modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 10,
  },

  closeButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
