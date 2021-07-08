import * as S from './styled'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e React Avançado escrito ao lado."
    />
    <S.Title>Mapa com Nextjs</S.Title>
    <S.Description>
      Typescript, ReactJS, Next JS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvdor de frente para uma tela com código"
    />
  </S.Wrapper>
)
export default Main
