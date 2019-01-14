# API Telzir

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.

Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista inicial com os códigos 
de DDD de origem e destino:

| Origem | Destino | $/min |
|:------:|:-------:|:-----:|
|   11   |    16   |  1.90 |
|   16   |    11   |  2.90 |
|   11   |    17   |  1.70 |
|   17   |    11   |  2.70 |
|   11   |    18   |  0.90 |
|   18   |    11   |  1.90 |

# Group API

## Sobre [/]

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um 
determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um 
acréscimo de 10% sobre a tarifa normal do minuto. Os planos mais populares são FaleMais 30 (30 minutos), 
FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos). A Telzir, preocupada com a transparência junto 
aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da 
ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da 
ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores:
(1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano 
deve ser desconsiderado para este problema.

# Group Preço

## Preço [/price]

### Cadastrar preços [POST]

+ Request  Cadastrar preços
    + Headers
    
        Accept: application/json
        Content-Type: application/json
    + Attributes (Chamada)

+ Response 201 (application/json)
    + Attributes (Created)

### Calcular preço [GET]

 + Headers
    
        Accept: application/json
        Content-Type: application/json
    + Attributes (CustoHeader)

+ Response 200 (application/json)
    + Attributes (Custo)

+ Response 404 (application/json)
    + Attributes (Error)

## Preços [/price/list]

### Listar Preços [GET]
+ Response 200 (application/json)
    + Attributes (array[ChamadaItem])

+ Response 404 (application/json)
    + Attributes (Error)

# Data Structures

## Chamada (object)
+ origem (number) - DDD de origem da chamada
+ destino (number) - DDD de destino da chamada
+ preco (number) - Custo do minuto da chamada

## ChamadaItem (object)
+ source (number) - DDD de origem da chamada
+ destination (number) - DDD de destino da chamada
+ price (number) - Custo do minuto da chamada
+ insertedAt (string) - Data do cadastro
+ _id (number) - ID auto-gerado da chamada

## CustoHeader
+ origem (number) - DDD de origem da chamada
+ destino (number) - DDD de destino da chamada
+ tempo (number) - Quantidade de minutos da chamada
+ falemais (number) - Quantidade de minutos do plano

## Custo (object)
+ Origem (number) - DDD de origem da chamada
+ Destino (number) - DDD de destino da chamada
+ Tempo (number) - Quantidade de minutos da chamada
+ Preço (string) - Preço do minuto da chamada
+ Plano (string) - Nome do plano com a sua quantidade de minutos
+ ComPlano (string) - Valor da chamada usando o plano
+ SemPlano (string) - Valor da chamada sem usar o plano


## Error (object)
+ code: 400 (number) - Status code
+ message (string) - Mensagem do status
+ description (string) - Descrição do status

## Created (object)
+ resultado (string) - Mensagem de sucesso

## Price (object)
+ source (number) - Origem da chamada
+ destination (number) - Destino da chamada
+ price (number) - Valor cadastrado do minuto
