import React, { useEffect, useState } from 'react'

import { Container } from '../../styles/GlobalStyles'
import { ProductContainer, ProductPicture } from './styled'

import axios from '../../services/axios'
import Loading from '../../components/Loading'

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setIsLoading(true)

      const response = await axios.get('/products')
      setProducts(response.data.data)

      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Produtos cadastrados</h1>
      <hr />

      <ProductContainer>
        {products.length === 0 ? (
          <>
            Nenhum produto cadastrado no momento.
          </>
        ) : (
            <table>
              <tr>
                <th>Imagem</th>
                <th>ID</th>
                <th>NFC</th>
                <th>Cadastrado em</th>
              </tr>
                {products.map(product => {
                  return (
                    <tr>
                    <td>
                      <ProductPicture>
                        <img src={product.image.url} alt='' />
                      </ProductPicture>
                    </td>
                    <td>{product.id}</td>
                    <td>{product.nfc}</td>
                    <td>{new Date(product.createdAt).toLocaleDateString()} {new Date(product.createdAt).toLocaleTimeString()}</td>
                  </tr>
                  )
                })}
            </table>
        )}
      </ProductContainer>
    </Container>
  )
}