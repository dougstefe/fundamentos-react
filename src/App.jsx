import "./App.css"

import First from './components/basics/First'
import WithParam from './components/basics/WithParam'
import Random from './components/basics/Random'
import Card from './components/layout/card/Card'
import Family from './components/basics/Family'
import Member from "./components/basics/Member"
import StudentsList from "./components/repetition/StudentsList"
import ProductsTable from "./components/repetition/ProductsTable"
import EvenOrOdd from "./components/conditional/EvenOrOdd"
import UserInfo from "./components/conditional/UserInfo"
import IndirectParent from "./components/comunication/IndirectParent"
import Input from "./components/form/Input"
import Counter from "./components/counter/Counter"
import NumberGenerator from "./components/numberGenerator/NumberGenerator"
export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card title="#13 - Gerador de números da mega sena" color="#49A6F0">
                <NumberGenerator quantity={6} minValue={1} maxValue={60}/>
            </Card>
            <Card title="#12 - Contador (class)" color="#F15779">
                <Counter number={0}/>
            </Card>
            <Card title="#11 - Componente controlado (Input)" color="#7679BF">
                <Input />
            </Card>
            <Card title="#10 - Comunicação indireta" color="#732C61">
                <IndirectParent />
            </Card>
            <Card title="#09 - Renderização condicional" color="#918F0D">
                <UserInfo user={{name: 'Douglas'}} />
                <UserInfo user={{email: 'douglas@gmail.com'}} />
            </Card>
            <Card title="#08 - Condicional" color="#D37703">
                <EvenOrOdd number={1 + Math.floor((100 - 1) * Math.random())} />
                <EvenOrOdd number={1 + Math.floor((100 - 1) * Math.random())} />
                <EvenOrOdd number={1 + Math.floor((100 - 1) * Math.random())} />
                <EvenOrOdd number={1 + Math.floor((100 - 1) * Math.random())} />
                <EvenOrOdd number={1 + Math.floor((100 - 1) * Math.random())} />
            </Card>
            <Card title="#07 - Tabela de produtos" color="#2A7B5F">
                <ProductsTable />
            </Card>
            <Card title="#06 - Lista de alunos" color="#BA5761">
                <StudentsList />
            </Card>
            <Card title="#05 - Componentes filhos"color="#7259B5">
                <Family lastName="Lessa">
                    <Member firstName="Douglas"></Member>
                    <Member firstName="Priscila"></Member>
                    <Member firstName="Isabella"></Member>
                    <Member firstName="Victor"></Member>
                    <Member firstName="Kauê"></Member>
                </Family>
            </Card>
            <Card title="#04 - Números aleatórios" color="#030">
                <Random
                    min={1}
                    max={60} />
                <Random
                    min={1}
                    max={60} />
                <Random
                    min={1}
                    max={60} />
            </Card>
            <Card title="#03 - Componente com parâmetros" color="#035">
                <WithParam
                    title='Parâmetros'
                    subtitle='Exemplo com parâmetros.' />
            </Card>
            <Card title="#01 - Primeiro componente" color="#500">
                <First></First>
            </Card>
        </div>
    </div>