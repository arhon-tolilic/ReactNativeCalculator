import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'

export default function Calculator() {
  const [displayVal, setDisplayVal] = useState('0')
  const [firstVal, setFirstVal] = useState(null)
  const [operator, setOperator] = useState(null)

  const { row, displayStyle, container } = styles

  const handlePressNumber = (value) => {
    setDisplayVal((prevValue) => {
      if (value === '.') {
        return prevValue + value
      }
      if (prevValue === '0') {
        return value
      }
      return prevValue + value
    })
  }
  const handleClear = () => {
    setDisplayVal('0')
    setFirstVal(null)
    setOperator(null)
  }
  const handlePercent = () => {
    const percentage = displayVal / 100
    setDisplayVal(percentage)
  }
  const handleOperator = (value) => {
    setFirstVal(displayVal)
    setOperator(value)
    setDisplayVal('0')
  }
  const handleToggleSignPress = () => {
    console.log('negative')
    setDisplayVal((prevValue) => {
      const currentValue = parseFloat(prevValue)
      if (currentValue === 0) {
        return prevValue
      }
      return (-currentValue).toString()
    })
  }

  const handleDeletePress = () => {
    setDisplayVal((prevValue) => {
      if (
        prevValue.length === 1 ||
        (prevValue.length === 2 && prevValue.startsWith('-'))
      ) {
        return '0'
      }
      return prevValue.slice(0, -1)
    })
  }
  const handleEqual = () => {
    const secondVal = displayVal
    let result = 0
    switch (operator) {
      case '+':
        result = parseFloat(firstVal) + parseFloat(secondVal)
        break
      case '-':
        result = parseFloat(firstVal) - parseFloat(secondVal)
        break
      case '*':
        result = parseFloat(firstVal) * parseFloat(secondVal)
        break
      case '/':
        result = parseFloat(firstVal) / parseFloat(secondVal)
        break
      default:
        break
    }
    setDisplayVal(result)
    setFirstVal(result)
    setOperator(null)
  }
  return (
    <View style={container}>
      <Text style={displayStyle}>{displayVal}</Text>
      <View style={row}>
        <Button textKey={'C'} onPress={() => handleClear()} />
        <Button textKey={'+/-'} onPress={() => handleToggleSignPress()} />
        <Button textKey={'%'} onPress={() => handlePercent()} />
        <Button textKey={'/'} onPress={() => handleOperator('/')} />
      </View>
      <View style={row}>
        <Button textKey={'7'} onPress={() => handlePressNumber('7')} />
        <Button textKey={'8'} onPress={() => handlePressNumber('8')} />
        <Button textKey={'9'} onPress={() => handlePressNumber('9')} />
        <Button textKey={'x'} onPress={() => handleOperator('*')} />
      </View>
      <View style={row}>
        <Button textKey={'4'} onPress={() => handlePressNumber('4')} />
        <Button textKey={'5'} onPress={() => handlePressNumber('5')} />
        <Button textKey={'6'} onPress={() => handlePressNumber('6')} />
        <Button textKey={'-'} onPress={() => handleOperator('-')} />
      </View>
      <View style={row}>
        <Button textKey={'1'} onPress={() => handlePressNumber('1')} />
        <Button textKey={'2'} onPress={() => handlePressNumber('2')} />
        <Button textKey={'3'} onPress={() => handlePressNumber('3')} />
        <Button textKey={'+'} onPress={() => handleOperator('+')} />
      </View>
      <View style={row}>
        <Button textKey={'0'} onPress={() => handlePressNumber('0')} />
        <Button textKey={'.'} onPress={() => handlePressNumber('.')} />
        <Button textKey={'DEL'} onPress={() => handleDeletePress()} />
        <Button textKey={'='} onPress={() => handleEqual()} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row'
  },
  displayStyle: {
    textAlign: 'right',
    fontSize: 40,
    marginBottom: 5
  }
})
