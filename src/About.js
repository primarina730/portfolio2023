import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import Circle from "react-circle";

import "./css/about.css";

function About() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const skillsCollectionRef = collection(db, "skills");
    getDocs(skillsCollectionRef).then((querySnapshot) => {
      setSkills(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div>
      <h2 className="eachpages__title">About me</h2>
      <div className="photo_introductions">
        <div className="myphotos">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/deliverable-69fe8.appspot.com/o/myphotos%2FSNOW_20220923_164510_356_Original.jpg?alt=media&token=d96739af-910b-4c73-a00a-7cba4bd4e68b"
            className="myphoto_elm"
          />
        </div>
        <div className="myintroductions">
          <ul>
            <li>趣味：弓道・ピアノ</li>
            <li>現在のMBTI：INTP</li>
            <li>
              好きなアニメ：進撃の巨人・ヴァイオレットエヴァーガーデン・葬送のフリーレン・結界師・ブルーロック
            </li>
          </ul>
          <p>
            非常に犬が好きです。将来はバセットハウンドか、セントバーナード、もしくは、バーニーズマウンテンドッグと一生に暮らすことが夢です。成果物のブログはやや黒歴史になりつつありますが、成果物なので置いておきます。フリーレンのコスプレに挑戦してみたいですが、誰も長身のフリーレンに需要を感じていない、解釈違いだと思うので、一生挑戦できないと思います。10ThingsはUnityで作成予定なので、お待ちください。
          </p>
        </div>
      </div>
      <div className="experienced-langs">
        <h3>使用経験言語</h3>
        <div className="skills">
          {skills.map((skill) => (
            <div key={skills.id} className="skill_lang_level">
              <div className="logos__container">
                <img src={skill.src} alt={skill.alt} className="lang-logo" />
              </div>
              <div className="skill-levels__container">
                <Circle
                  animate={true}
                  animationDuration="1s"
                  responsive={false}
                  size="100"
                  lineWidth="40"
                  progress={skill.level}
                  progressColor="rgb(76, 154, 255)"
                  bgColor="#ecedf0"
                  textColor="#6b778c"
                  textStyle={{
                    font: "bold 4rem Helvetica, Arial, sans-serif",
                  }}
                  percentSpacing={10}
                  roundedStroke={false}
                  showPercentage={true}
                  showPercentageSymbol={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;
