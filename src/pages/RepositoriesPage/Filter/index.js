import React from 'react'
import { Container, Selector, Cleaner } from './styles'

const Filter = () => {
    const langs = [
        {name: 'python', count: 10, color: '#95a5a6'},
        {name: 'javascript', count: 6, color: '#f1c40f'},
        {name: 'php', count: 1, color: '#8e44ad'}
    ];

    const selectors = langs.map(({ name, count, color }) => (
        <Selector key={name.toLowerCase()} color={color}>
            <span>{name}</span>
            <span>{count}</span>
        </Selector>
    ));

  return (
    <Container>
        {selectors}
        <Cleaner>Limpar</Cleaner>
    </Container>
  )
}

export default Filter
