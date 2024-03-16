import { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Hamburger from "../../../assets/Group102.png";
import Person from "../../../assets/Rectangle265.png";
import Person2 from "../../../assets/Person2.png";
import Recieved from "../../../assets/Recieved2.png";
import Yellow from "../../../assets/yellow.png";
import {
  balance,
  transaction,
} from "../../../app/modules/services/authCRUD.js";

const Dashboard = ({ route }) => {
  const { username } = route.params;
  const [totalBalance, setTotalBalance] = useState([]);
  const [totalTransaction, setTotalTransaction] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await balance();

        setTotalBalance(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTransData = async () => {
      try {
        const response = await transaction();
        setTotalTransaction(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTransData();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#0E164D" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.hamBox}>
            <View style={styles.ham}>
              <Image source={Hamburger} style={styles.myHamburger} />
            </View>
            <Text style={styles.myTitle}> Hello {username}, </Text>
          </View>

          <View style={styles.addMoney}>
            <Text style={styles.addMoneyText}> Add money </Text>
          </View>
        </View>

        <View style={styles.second}>
          <Text style={styles.balance}> Your current balance is </Text>
          <Text style={styles.balance2}>
            {" "}
            {totalBalance?.currency} {totalBalance?.balance}{" "}
          </Text>
        </View>

        <View style={styles.moneyBox}>
          <View style={styles.myMoney}>
            <Text style={styles.myMoneyText}> Request Money</Text>
          </View>
          <View style={styles.myMoney}>
            <Text style={styles.myMoneyText}> Send Money</Text>
          </View>
        </View>

        <View style={styles.trans}>
          <View style={styles.rectangle} />
          <View style={styles.moneyBox}>
            <Text style={styles.transTitle}> All Transactions</Text>
            <Text style={styles.transTitle2}>
              {" "}
              Sort by: <Text style={styles.transTitle3}>Recent </Text>
            </Text>
          </View>

          <View style={styles.mainTrans}>
            <View style={styles.transDetails}>
              <Image source={Person} style={styles.person} />

              <View>
                <Text style={styles.personName}> Adeboye Usman</Text>
                <View style={styles.greenTag}>
                  <Image source={Recieved} style={styles.recievedBox} />
                  <Text style={styles.recievedText}> Recieved </Text>
                </View>
              </View>
            </View>

            <Text style={styles.transPrice}>ETH 10.5</Text>
          </View>

          <View style={styles.secondTrans}>
            <View style={styles.transDetails}>
              <Image source={Person2} style={styles.person} />

              <View>
                <Text style={styles.personName}> Onome Adetayo </Text>
                <View style={styles.yellowTag}>
                  <Image source={Yellow} style={styles.recievedBox} />
                  <Text style={styles.recievedText}> Sent </Text>
                </View>
              </View>
            </View>

            <Text style={styles.yellowTransPrice}> BTC 5.2</Text>
          </View>

         

          {/* {totalTransaction?.map((transaction, index) => (
            <View
              key={index}
              style={index % 2 === 0 ? styles.mainTrans : styles.secondTrans}
            >
              <View style={styles.transDetails}>
                <Image
                  source={transaction?.type === "credit" ? Person : Person2}
                  style={styles.person}
                />
                <View>
                  <Text style={styles.personName}>
                    {transaction?.type === "credit"
                      ? "Adeboye Usman"
                      : "Onome Adetayo"}
                  </Text>
                  <View
                    style={
                      transaction?.type === "credit"
                        ? styles.greenTag
                        : styles.yellowTag
                    }
                  >
                    <Image
                      source={
                        transaction?.type === "credit" ? Recieved : Yellow
                      }
                      style={styles.recievedBox}
                    />
                    <Text style={styles?.recievedText}>
                      {transaction.type === "credit" ? "Recieved" : "Sent"}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.transPrice}>
                {" "}
                {transaction?.currency} {transaction?.amount}
              </Text>
            </View>
          ))} */}
        </View>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010A43",
    paddingTop: 40,
  },
  myHamburger: {
    width: 20,
    height: 10,
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  hamBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  ham: {
    backgroundColor: "#212A6B",
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 5,
  },
  myTitle: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: 20,
  },
  addMoney: {
    backgroundColor: "#212A6B",
    width: 90,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addMoneyText: {
    color: "#426DDC",
    fontFamily: "poppins-medium",
  },
  second: {
    marginLeft: 16,
    marginRight: 16,
  },
  balance: {
    color: "#E7E4E4",
    fontSize: 12,
    fontFamily: "poppins-regular",
    marginBottom: 5,
  },
  balance2: {
    color: "#EEEEEE",
    fontSize: 40,
    fontFamily: "poppins-bold",
    marginBottom: 5,
  },
  moneyBox: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  myMoney: {
    borderWidth: 1,
    borderColor: "#464E8A",
    width: 164,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  myMoneyText: {
    color: "#464E8A",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
  trans: {
    backgroundColor: "#10194E",
    marginTop: 40,
    minHeight: 700,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
  },
  rectangle: {
    width: 64,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#4E589F",
    alignSelf: "center",
    marginBottom: 10,
  },
  transTitle: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
  transTitle2: {
    color: "#4E589F",
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
  transTitle3: {
    color: "#FFFFFF",
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
  mainTrans: {
    backgroundColor: "#192259",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transDetails: {
    flexDirection: "row",
  },
  person: {
    height: 48,
    width: 48,
    marginRight: 10,
  },
  personName: {
    color: "#858EC5",
    fontFamily: "poppins-bold",
    fontSize: 16,
  },
  greenTag: {
    flexDirection: "row",
    backgroundColor: "#1DC7AC",
    width: 87,
    height: 28,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  recievedBox: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  recievedText: {
    color: "#FFFFFF",
    fontFamily: "poppins-regular",
    fontSize: 12,
  },
  transPrice: {
    color: "#1DC7AC",
    fontSize: 16,
    fontFamily: "poppins-bold",
  },
  secondTrans: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yellowTag: {
    flexDirection: "row",
    backgroundColor: "#FAAD39",
    width: 62,
    height: 28,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  yellowTransPrice: {
    color: "#FAAD39",
    fontSize: 16,
    fontFamily: "poppins-bold",
  },
});
