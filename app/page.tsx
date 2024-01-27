'use client'
import Operator from "@/app/components/Operator";
import Link from "next/link";
import Main from "@/app/components/Main";
import Screen from "@/app/components/Screen";

export default function Home() {

    const operators = [
        {title: 'МегаФон', color: 'green'},
        {title: 'МТС', color: 'red'},
        {title: 'билайн', color: 'yellow'},
    ]

    const operatorsList = operators.map((operator, index) =>
        <Link
            href={{
                pathname: `/${index}`, query: {title: operator.title}
                }}
        >
            <Operator color={operator.color} key={index.toString()} title={operator.title} />
        </Link>
    );


  return (
    <Main>
        <Screen>
            {operatorsList}
        </Screen>
    </Main>
  );
}
