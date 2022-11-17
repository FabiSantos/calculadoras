
import React, { useState } from 'react'
import './App.scss'

const App = () => {
  const [valorTela, setValorTela] = useState('');
  const [acumulador, setAcumulador] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operado, setOperado] = useState(false);

  //COMPONENTES

  const tela = (valor, res) => {
    return (
      <div className='tela'>
        <span className='operacao'>{valor}</span>
        <span className='resultado'>{res}</span>
      </div>
    )

  }

  const btn = (label, onclick) => {
    return (
      <button className='btn' onClick={onclick}>{label}</button>
    )

  }

  //FUNÇOES

  const addDigitoTela = (dig) => {
    if ((dig === '+' || dig === '-' || dig === '/' || dig === '*') && operado) {
      console.log('+-*/');
      setOperado(false)
      setValorTela(resultado + dig)
      return
    }
    if (operado) {
      setValorTela(dig)
      setOperado(false)
      return
    }

    const valorDigitadoTela = valorTela + dig
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return


  }

  const operacao = (oper) => {
    if (oper === 'bs') {
      let vTela = valorTela
      vTela = vTela.substring(0, (vTela.length - 1))
      setValorTela(vTela)
      setOperado(false)
      return

    }
    try {
      const r = eval(valorTela) //CALCULO
      setAcumulador(r)
      setResultado(r)
      setOperado(true)

    } catch {
      setResultado('ERRO')
    }
  }

  return (
    <div className='alls'>
       <div className='container'>
      <h3>Calculadora matematica simples</h3>
      {tela(valorTela, resultado)}
      <div className='botoes'>
        {btn('AC', limparMemoria)}
        {btn('(', () => addDigitoTela('('))}
        {btn(')', () => addDigitoTela(')'))}
        {btn('/', () => addDigitoTela('/'))}
        {btn('7', () => addDigitoTela('7'))}
        {btn('8', () => addDigitoTela('8'))}
        {btn('9', () => addDigitoTela('9'))}
        {btn('*', () => addDigitoTela('*'))}
        {btn('4', () => addDigitoTela('4'))}
        {btn('5', () => addDigitoTela('5'))}
        {btn('6', () => addDigitoTela('6'))}
        {btn('-', () => addDigitoTela('-'))}
        {btn('1', () => addDigitoTela('1'))}
        {btn('2', () => addDigitoTela('2'))}
        {btn('3', () => addDigitoTela('3'))}
        {btn('+', () => addDigitoTela('+'))}
        {btn('0', () => addDigitoTela('0'))}
        {btn('.', () => addDigitoTela('.'))}
        {btn('<-', () => operacao('bs'))}
        {btn('=', () => operacao('='))}
      </div>
    </div>
    </div>
   
  )
}

export default App