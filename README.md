# PLATZOM

PLATZOM es un idioma inventado para el [curso de Fundamentos Javascript](https::/platzi.com/js)

## Descripción del idioma

- Si la palabra termina en ar se le quitan esos dos caracteres
- Si la palabra inicia con Z se le adiciona pe al final
- Si la palabra traducida tiene diez o más letras se debe partir a la mitad y unir con un - del medio
- Si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

## Instalación

```
npm intall  platzom
```

## Uso

```
import platzom from 'platzom'


platzom('programar')//program
platzom('Zorro');//Zorrope
platzom('Zarpar');//Zarppe

platzom('estaesunapalabrota');//estaesuna-palabrota

platzom('sometemos');//SoMeTeMoS

```

## Créditos
[Cristian Collazos]

## Locencia
[MIT](https://opensource.org/licenses/MIT)


