import {
  PlayButton,
  RulesWrapper,
  Wrapper,
  TextWrapper,
} from '../../style/Rules'

function Rules() {
  return (
    <RulesWrapper>
      <Wrapper>
        <TextWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          elementum odio. Curabitur eget massa a nisi congue aliquet ut ac ex.
          Curabitur euismod convallis felis, congue vehicula diam ultrices
          fringilla. Curabitur aliquet dictum purus nec pharetra. Fusce auctor
          lectus faucibus justo vehicula, vitae laoreet velit tempor. Morbi
          sagittis viverra aliquam. Vestibulum vitae nisi ex. Aenean suscipit
          velit ac ipsum euismod euismod. Integer sed sem condimentum, faucibus
          velit vel, dictum odio. Phasellus sodales fermentum mi, quis tincidunt
          lacus ornare in. Proin vitae lacinia massa. Phasellus metus sapien,
          dapibus vitae velit in, elementum viverra risus. Nunc vestibulum et
          leo non imperdiet. Vestibulum accumsan odio eget leo commodo, et
          euismod augue maximus. Ut dapibus, purus convallis vestibulum
          bibendum, est erat condimentum arcu, a tempus libero tortor et nisi.
          Integer tincidunt ornare feugiat. Sed vitae luctus tortor, at auctor
          mauris. Maecenas augue tortor, dictum quis tincidunt vitae, faucibus
          at eros. Etiam rhoncus lobortis tortor, id consectetur mi lobortis id.
          Donec orci tellus, commodo a mauris ac, commodo feugiat lectus. Etiam
          quis tortor interdum, pellentesque diam eget, faucibus neque. Vivamus
          egestas lacus porta, venenatis tortor in, aliquet sapien. Nam ac
          malesuada arcu. In hac habitasse platea dictumst. Ut rhoncus elit
          suscipit malesuada aliquet. Suspendisse non maximus dolor. Fusce
          elementum elit sed blandit lobortis. Sed semper porta lobortis. Ut
          eleifend ut urna in egestas. Donec tristique libero libero, at semper
          dolor feugiat pellentesque. Nullam scelerisque, ex tincidunt consequat
          euismod, lectus metus pellentesque massa, sit amet interdum lectus
          risus ut nisi. Quisque ornare, sapien eget sollicitudin porta, nulla
          enim dignissim quam, at consectetur mauris lorem in mauris. Sed semper
          tortor fringilla tellus lacinia maximus. Mauris commodo non ante vitae
          dignissim. Sed eros nisi, lobortis quis enim quis, vestibulum ultrices
          dolor. Nulla sed lectus at felis aliquam fringilla eget quis elit. Sed
          id felis nec urna pharetra faucibus porta eget enim. Maecenas suscipit
          aliquet sem at pharetra. Curabitur sed libero sem. Etiam vulputate
          purus lorem, blandit sagittis quam posuere id. Vivamus nec aliquet
          elit. Sed porta euismod quam, nec porttitor justo blandit ac. Sed
          eleifend ultricies nibh quis finibus. Proin eu vestibulum eros. Nulla
          viverra porttitor tristique.
        </TextWrapper>
        <PlayButton to="/register" $isFullLink>
          JOUER
        </PlayButton>
      </Wrapper>
    </RulesWrapper>
  )
}

export default Rules
