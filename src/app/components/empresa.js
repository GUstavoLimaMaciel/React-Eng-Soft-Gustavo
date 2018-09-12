// import React from 'react';
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import {Title, Wrapper, Input, Button, SubTitle, Description, Price, Change, PriceLetreiro, ChangeLetreiro} from '../style/style';

import { connect } from 'react-redux';
import * as actions from '../actions';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const callApi = async (sigla) => {
    const response = await fetch('/' + sigla + '/company');
    const empresa = await response.json();
    const response2 = await fetch('/' + sigla + '/chart');
    const grafico = await response2.json();
    const response3 = await fetch('/' + sigla + '/quote');
    const movimentacao = await response3.json();
    return {
        empresa: empresa,
        grafico: grafico,
        movimentacao: movimentacao
    };
};

const endpoint = 'https://ws-api.iextrading.com/1.0/last';

class Aplicacao extends Component{
    constructor(props){
        super(props);
        this.state = {
            acao: "",
            acaoPesquisada: ""
        };
        this.onChange = this.onChange.bind(this);
        this.request = this.request.bind(this);
        this.atualizacaoTempoReal = this.atualizacaoTempoReal.bind(this);
    }
    
    onChange(ev){
        this.setState({acao: ev.target.value});
    }

    request(callback){
        callApi(this.state.acao)
        .then(res => callback(res))
        .catch(err => console.log(err));
    }
    
    atualizacaoTempoReal(callback){
        console.log(this.state.acao);
        const socket = socketIOClient(endpoint);
        socket.on('connect', () => {
            socket.emit('subscribe', this.state.acao);
            this.request(callback);
        });
    };
    
    
    render(){
        const {dados, sendRequest} = this.props;
        // console.log(dados);
        
        return(
            <div className="Aplicacao">
                <Wrapper>
                    <div className="InputAcao">
                        <Input placeholder="Insira o símbolo de ação aapl, fb ou twtr" value={this.state.acao} onChange={this.onChange} size="10px" />
                        <Button primary onClick={() => this.atualizacaoTempoReal(sendRequest)}>Pesquisar</Button>
                    </div>
                    <div>
                        <div className="align-start">
                            {
                                dados.empresa ? 
                                <Title className="inBlock">
                                    {dados.empresa.companyName + ' (' + dados.empresa.symbol + ')'}
                                </Title>
                                : ''
                            }
                            {
                                dados.movimentacao ? 
                                    <Price>
                                        {dados.movimentacao.latestPrice}
                                    </Price>
                                : ''
                            }
                            {
                                dados.movimentacao ? 
                                    <Change value={dados.movimentacao.change}>
                                        {parseFloat(dados.movimentacao.change).toFixed(2) + ' (' + (parseFloat(dados.movimentacao.changePercent * 100).toFixed(2)) + '%)'}
                                    </Change>
                                : ''
                            }
                        </div>
                        {
                            dados.empresa ? 
                            <div>
                                <SubTitle>
                                    {dados.empresa.exchange}
                                </SubTitle>
                                <SubTitle>
                                    {dados.empresa.website}
                                </SubTitle>
                            </div>
                            : ''
                        }
                        {
                            dados.empresa ? 
                            <div className="align-start">
                                <Description>
                                    {dados.empresa.description}
                                </Description>
                            </div>
                            : ''
                        }
                        
                    </div>
                </Wrapper>
                {
                    dados.movimentacao ? 
                    <div className="Animacao">
                        <PriceLetreiro>
                            {dados.movimentacao.symbol + ' ' + dados.movimentacao.latestPrice}
                        </PriceLetreiro>
                        <ChangeLetreiro value={dados.movimentacao.change}>
                            {parseFloat(dados.movimentacao.change).toFixed(2)}
                        </ChangeLetreiro>
                    </div>
                    : ''
                }
                {
                    dados.grafico ? 
                    <LineChart width={1200} height={300} data={dados.grafico} margin={{top: 10, right: 30, left: 30, bottom: 5}}>
                        <XAxis dataKey="label"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="open" stroke="#82ca9d" />
                    </LineChart>
                    : ''
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dados: state.consulta.dados
});


export default connect(mapStateToProps, actions)(Aplicacao);