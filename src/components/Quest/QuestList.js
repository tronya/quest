import React from "react";

import QuestItem from "./QuestItem";

class QuestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quests: [
        {
          "id": 3,
          "name": "Quest",
          "description": "iPhone и iPad. Основательное улучшение основных функций.\r\nС появлением iOS 11 ваши iPhone и iPad становятся такими умными, что могут учиться у вас. Такими способными, что всегда найдут индивидуальный подход к решению ваших задач. И такими мощными, что вы не сможете без них обойтись.",
          "start_date": "2017-09-27T14:11:12Z",
          "logo": "http://188.166.18.216/media/Picture/0cdb74b9-b54f-4bdb-9ba1-a2c142554ac1.jpg",
          "author": 1,
          "members": [],
          "markers": [
            {
              "id": 6,
              "order_number": 1,
              "name": "Bubu",
              "lat": "23.4300000",
              "lon": "24.4500000",
              "picture": "http://188.166.18.216/media/Picture/4b82c097-09ca-40bd-b9ba-56bc3331d41f.jpg",
              "author": {
                "email": "tronyak@mail.ru",
                "first_name": "Yura",
                "last_name": "Tronyak",
                "fb_id": "1212350578872808",
                "user_profile": {
                  "user_story": ""
                }
              }
            },
            {
              "id": 7,
              "order_number": 2,
              "name": "fint",
              "lat": "23.4400000",
              "lon": "24.4600000",
              "picture": "http://188.166.18.216/media/Picture/4b82c097-09ca-40bd-b9ba-56bc3331d41f.jpg",
              "author": {
                "email": "odarchenko@ex.ua",
                "first_name": "Donald",
                "last_name": "Trump",
                "fb_id": "donald_dick",
                "user_profile": {
                  "user_story": "huge dick"
                }
              }
            }
          ]
        },
        {
          "id": 4,
          "name": "Большой шаг для iPhone. Гигантский скачок для iPad.",
          "description": "iOS 11 задаёт новый стандарт самой передовой мобильной операционной системы в мире. С ней iPhone становится ещё лучше, чем прежде. iPad превосходит самого себя. И для обоих устройств iOS 11 открывает потрясающие новые возможности по использованию дополненной реальности в играх и приложениях. Это самые быстрые, продуманные и удобные iPhone и iPad в истории — благодаря iOS 11.",
          "start_date": "2017-09-23T21:14:34Z",
          "logo": "http://188.166.18.216/media/Picture/85bfbc2e-ade3-4945-9b9f-e1b20f599f3a.jpg",
          "author": 1,
          "members": [],
          "markers": [
            {
              "id": 8,
              "order_number": 1,
              "name": "Kkhgfkhjgljhg",
              "lat": "45.0000000",
              "lon": "45.0000000",
              "picture": "http://188.166.18.216/media/Picture/0cdb74b9-b54f-4bdb-9ba1-a2c142554ac1.jpg",
              "author": {
                "email": "odarchenko@ex.ua",
                "first_name": "Donald",
                "last_name": "Trump",
                "fb_id": "donald_dick",
                "user_profile": {
                  "user_story": "huge dick"
                }
              }
            },
            {
              "id": 9,
              "order_number": 2,
              "name": "second marker",
              "lat": "45.0000000",
              "lon": "55.0000000",
              "picture": "http://188.166.18.216/media/Picture/0cdb74b9-b54f-4bdb-9ba1-a2c142554ac1.jpg",
              "author": {
                "email": "tronyak@mail.ru",
                "first_name": "Yura",
                "last_name": "Tronyak",
                "fb_id": "1212350578872808",
                "user_profile": {
                  "user_story": ""
                }
              }
            }
          ]
        }
      ]
    }
  }

  fetchNewItems() {
    fetch('http://188.166.18.216/api/v1/quests/', {
      method: "GET",
      credentials: "include",
      headers: {
        'Authorization': `Token ${this.props.appKey}`
      }
    })
      .then(function (response) {
        console.log(response)
      });
  }

  componentDidMount() {
    this.fetchNewItems();
  }

  render() {
    let quests = this.state.quests.map((quest) => {
      return (
        <QuestItem key={quest.id} quest={quest}></QuestItem>
      )
    });
    return (
      <div className="quest-wrapper">
        {quests}
      </div>
    )
  }


}

export default QuestList;