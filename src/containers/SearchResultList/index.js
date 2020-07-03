import React, { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const FlexHover = styled(Flex)`

  :hover {
    background: white;
    color: black;
    opacity: .1;
  }

`

function SearchResultList({ children, data = [], language = 'en' }) {

  const [animprops, set, stop] = useSpring(() => ({
    opacity: 1
  }))

  useEffect(() => {
    // set({ delay: 400, reset: true, opacity: 1  })
  }, [data])

  function highlight() {
    console.log('hovered')
    set({ opacity: .5 })
  }

  /* data = [
      {
          "_index": "vjp",
          "_type": "items",
          "_id": "wooden-bookshelf",
          "_score": 5.708178,
          "_source": {
              "id": "wooden-bookshelf",
              "category": "Furniture",
              "meta": {
                  "orderable": false,
                  "sellPrice": {
                      "currency": "bells",
                      "value": 1925
                  },
                  "buyPrices": [
                      {
                          "currency": "bells",
                          "value": 7700
                      }
                  ],
                  "recipe": {
                      "book": 5,
                      "wood": 10
                  },
                  "variations": {
                      "light-brown": "Light brown",
                      "brown": "Brown",
                      "dark-brown": "Dark brown",
                      "white": "White"
                  }
              },
              "en": {
                  "name": "wooden bookshelf"
              },
              "gb": {
                  "name": "wooden bookshelf"
              },
              "jp": {
                  "name": "もくせいのほんだな"
              },
              "es": {
                  "name": "librería grande de madera"
              }
          }
      },
      {
          "_index": "vjp",
          "_type": "items",
          "_id": "wooden-bucket",
          "_score": 5.708178,
          "_source": {
              "id": "wooden-bucket",
              "category": "Furniture",
              "meta": {
                  "orderable": false,
                  "customizable": false,
                  "sellPrice": {
                      "currency": "bells",
                      "value": 1100
                  },
                  "recipe": {
                      "wood": 3,
                      "iron-nugget": 1
                  }
              },
              "en": {
                  "name": "wooden bucket"
              },
              "gb": {
                  "name": "wooden bucket"
              },
              "jp": {
                  "name": "もくせいのバケツ"
              },
              "es": {
                  "name": "cubo de madera"
              }
          }
      },
      {
          "_index": "vjp",
          "_type": "items",
          "_id": "wooden-clogs",
          "_score": 5.708178,
          "_source": {
              "id": "wooden-clogs",
              "category": "Shoes",
              "meta": {
                  "orderable": true,
                  "sources": [
                      "Able Sisters",
                      "Kicks"
                  ],
                  "sellPrice": {
                      "currency": "bells",
                      "value": 325
                  },
                  "buyPrices": [
                      {
                          "currency": "bells",
                          "value": 1300
                      }
                  ],
                  "variations": {
                      "yellow": "Yellow",
                      "blue": "Blue",
                      "red": "Red",
                      "green": "Green",
                      "brown": "Brown"
                  }
              },
              "en": {
                  "name": "wooden clogs"
              },
              "gb": {
                  "name": "wooden clogs"
              },
              "jp": {
                  "name": "きぐつ"
              },
              "es": {
                  "name": "zueco florido"
              }
          }
      }
  ] */

  function itemClick() {
    console.log('fuck')
  }

  return (
    <>

      {
        data.map(({
          _source
        }) =>

          <FlexHover alignItems='center' cursor='pointer' onClick={itemClick}
            p={4} key={_source.id} justify='center'
            flex={1} fontSize={[ 12, 14 ]} maxH='50px'
          >
            <Flex flex={4}>
              { _source[language].name }
            </Flex>

            <Flex flex={2} color='gray.500'>
              { _source.category }
            </Flex>
          </FlexHover>
        )
      }

    </>
  )

}

export { SearchResultList }
