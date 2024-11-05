import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem iDescricaosum dolor sit, amet consectetur adipisicing elit. Ratione
      quam ducimus similique sequi neque alias tenetur, ab saepe eius cumque
      quidem vero ea, itaque suscipit quos iste nisi veniam velit.
    </Descricao>
  </Card>
)

export default Product
