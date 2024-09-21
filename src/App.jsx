import React from "react";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";

import { Article } from "./components/Article/Article";

import articleimg1 from "./assets/img/dashboard.png";

import articleimg2 from "./assets/img/img2.png";

import articleimg3 from "./assets/img/img3.png";

import articleimg4 from "./assets/img/img4.png";
import { Counter } from "./components/Counter/Counter";


class App extends React.Component {
  
  render(){
    return (
      <>
        <Navbar />

        <Counter />

        {/* <section id="articles">

        <Article title="Designing Dashboard" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam dolor voluptatibus repudiandae cum amet ea iste. Odit, commodi. Quidem, accusantium eaque nulla fuga delectus omnis numquam magnam quae consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sed autem cumque unde architecto iste obcaecati ab voluptatibus quisquam impedit, voluptatem aliquam sunt ipsam consequuntur esse? Earum illum repellendus molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo, hic voluptatibus ut necessitatibus ipsum a, unde vero temporibus, ullam voluptas ratione in odio dolore deserunt? Veritatis alias eos error?
        " thumbnail={articleimg1}/>

        <Article title="Clayton" provider="Cerebro" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam dolor voluptatibus repudiandae cum amet ea iste. Odit, commodi. Quidem, accusantium eaque nulla fuga delectus omnis numquam magnam quae consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sed autem cumque unde architecto iste obcaecati ab voluptatibus quisquam impedit, voluptatem aliquam sunt ipsam consequuntur esse? Earum illum repellendus molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo, hic voluptatibus ut necessitatibus ipsum a, unde vero temporibus, ullam voluptas ratione in odio dolore deserunt? Veritatis alias eos error?" thumbnail={articleimg2}/>

        <Article title="Bgaa Group" provider="Grupo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam dolor voluptatibus repudiandae cum amet ea iste. Odit, commodi. Quidem, accusantium eaque nulla fuga delectus omnis numquam magnam quae consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sed autem cumque unde architecto iste obcaecati ab voluptatibus quisquam impedit, voluptatem aliquam sunt ipsam consequuntur esse? Earum illum repellendus molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo, hic voluptatibus ut necessitatibus ipsum a, unde vero temporibus, ullam voluptas ratione in odio dolore deserunt? Veritatis alias eos error?" thumbnail={articleimg3}/>

        <Article title="Nivea Maria" provider="Prof" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam dolor voluptatibus repudiandae cum amet ea iste. Odit, commodi. Quidem, accusantium eaque nulla fuga delectus omnis numquam magnam quae consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sed autem cumque unde architecto iste obcaecati ab voluptatibus quisquam impedit, voluptatem aliquam sunt ipsam consequuntur esse? Earum illum repellendus molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo, hic voluptatibus ut necessitatibus ipsum a, unde vero temporibus, ullam voluptas ratione in odio dolore deserunt? Veritatis alias eos error?" thumbnail={articleimg4}/>

        </section> */}

         
      </>
    );
  }
}

export default App;
