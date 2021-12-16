import { useState } from "react"
import Modal from 'react-modal';
import logoMoney from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    
    return (
        <Container>
            <Content>
            <img src={logoMoney} alt="logo dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}> 
            Nova Transação
            </button>
            

            </Content>
        </Container>
    )
}