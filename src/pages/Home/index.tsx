import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Card";
import { Comments } from "../../components/Comments";
import { Content, ContentFilter, Header, Profile, TextFilter } from "./styles";
import { useAppContext } from "../../context/AppContext";
import { Picker } from "@react-native-picker/picker";

export const Home = () => {
  const [showModalComents, setShowModalComents] = useState(false);
  const [listType, setListType] = useState<string[]>([]);
  const [typeSelected, setTypeSelected] = useState("");

  const { newsList } = useAppContext();

  const { news, comments } = useAppContext();

  const getComments = async (id: number) => {
    const data = await comments(id);

    if (data) {
      setShowModalComents(true);
    }
  };

  useEffect(() => {
    news();
  }, []);

  useEffect(() => {
    if (listType.length === 0) {
      let aux: string[] = [];

      newsList.filter((item) => {
        return aux.some((el: string) => el === item.type)
          ? false
          : aux.push(item.type);
      });

      setListType(aux);
    }
  }, [newsList]);

  return (
    <Content>
      <Header>
        <Profile source={require("../../assets/image/user-0.png")} />
        <ContentFilter>
          <TextFilter>Filtrar notícia:</TextFilter>
          <Picker
            selectedValue={typeSelected}
            onValueChange={(value) => {
              setTypeSelected(value);
              news(value);
            }}
            dropdownIconColor="#000"
            style={{
              color: "#fff",
              width: "60%",
              alignSelf: "flex-end",
            }}
          >
            <Picker.Item key={0} label="Todos" value="" />
            {listType?.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </ContentFilter>
      </Header>
      <FlatList
        data={newsList}
        renderItem={({ item, index }) => (
          <Card
            key={item.id}
            data={item}
            getComments={getComments}
            index={index}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />
      <Comments visible={showModalComents} setVisible={setShowModalComents} />
    </Content>
  );
};
