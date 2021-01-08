# Números Felizes

## Os números felizes são definidos pelo seguinte procedimento:

Começando com qualquer número inteiro positivo, o número é substituído pela soma dos
quadrados dos seus dígitos.
Repete-se esse processo até que o número seja igual a 1.
Tomamos o 7, que é um número feliz:
- 72 = 49
- 42 + 92 = 97
- 92 + 72 = 130
- 12 + 32 + 02 = 10
- 12 + 02 = 1

Um número não é feliz quando, em seu processo de cálculo em algum momento ele entra em
loop, ou seja, ele passe por um número que ele já passou anteriormente (não é possível
determinar um número específico que ele sempre irá passar).
Faça um programa que, dado um número natural qualquer, ele determine se é um número feliz.