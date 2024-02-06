 # Práctica 1

# Ejercicios

## Ejercicio 1
a) Explica para qué sirve la primera línea del documento y por qué es necesaria
Para especificar el tipo de documento, en este caso dtd o document type definition y la ubicación

b) Si se omitiese esta línea, ¿Qué piensas que ocurriría?
Seguiría siendo un doc XML pero no reconocería un fichero dtd, no usando así las reglas del dtd y su estructura

c) Sin conocer el contenido del fichero urjc_ml.dtd, ¿el documento es sintácticamente correcto?
Sí

d) ¿Qué hace la tercera línea?
Indica el comienzo del elemento raiz del doc XML

e) ¿Cuantas etiquetas de apertura hay? ¿Cuantas de cierre?
5 de apertura y 5 de cierre

f) Dibuja el diagrama de contenedores de este documento
>urjc_ml
  >campus
      >escuela
          >grado
              >nombre
              >asignatura
                    >asignatura
                    >asignatura

g) Dibuja la estructura en árbol que define este documento
     urjc_ml
        :
      campus
        :
        :
    ------------
    :          :
  nombre     grado 
               :
           --------------------------
           :        :               :
        nombre    asignatura   asignatura


## Ejercicio 2

a) Escribe el documento en SGML que representa esa estructura
<!DOCTYPE universidad SYSTEM "universidad.dtd">
<universidad>
  <!-- include URL URJC -->
  <escuela>
    <nombre>
        <nombre>ETSI Telecomunicación</nombre>
    </nombre>
    <grado>
        <nombre>'Ingeniería en sistemas' 'Audiovisuales y Multimedia'</nombre>
        <asignatura>LTAW</asignatura>
        <asignatura>CSAII</asignatura>
        <asignatura>ASA II</asignatura>
    </grado>
    <grado>
        <nombre>'Ingeniería en Robótica' 'Software'</nombre>
        <asignatura>AC</asignatura>
    </grado>
  </escuela>
</universidad>

b) ¿Cuántos elementos contenedores hay? Indica sus nombres
Hay 4, universidad, escuela, nombre, grado.

c) ¿Cuantos elementos terminales hay? Indica sus valores
ETSI Telecomunicación (dentro del primer nombre).
'Ingeniería en sistemas' 'Audiovisuales y Multimedia' (dentro del primer nombre de grado).
LTAW, CSAII, ASA II (dentro de asignatura en el primer grado).
'Ingeniería en Robótica' 'Software' (dentro del segundo nombre de grado).
AC (dentro de asignatura en el segundo grado).

d) ¿Cuantos elementos hay en el nivel 3?. Escribe sus nombres
nombre (dentro de escuela).
grado (dentro de escuela).

## Ejercicio 3


a) Escribe el documento en SGML que representa esa estructura

b) ¿Cuantos elementos hay en total?

c) ¿Cuantos elementos terminales hay?. Indica sus valores

d) ¿Cuantos elementos no terminales hay?. Indica cuántos hay en cada nivel

e) ¿Cuantos elementos hay en el nivel 5?.Indica sus nombres

## Ejercicio 4

a) Su diagrama de contenedores
>FPGAs
    >FPGAs libres
        >Familias
            >ice40
            >UP5K
            >ECP5
        >Placas
            >Alhambra II
            >Icestick
            >ULX3S
            >iceBreaker
            >TinyFPGA

b) Su estructura en árbol
FPGAs
  ├── FPGAs libres
        ├── Familias
        │     ├── ice40
        │     ├── UP5K
        │     └── ECP5
        └── Placas
              ├── Alhambra II
              ├── Icestick
              ├── ULX3S
              ├── iceBreaker
              └── TinyFPGA
