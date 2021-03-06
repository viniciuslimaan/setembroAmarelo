import Slider from "react-slick"
import { Icon } from '@iconify/react'

import VanGoghImg from '../../assets/vincentVanGogh.jpg'
import VanGoghMuseumImg from '../../assets/vincentVanGoghMuseum.jpg'
import GaulesImg from '../../assets/gaules.jpg'
import GaulesAwardImg from '../../assets/gaulesAward.jpg'

import { Content, Arrow, PageBalls, Ball, BallSelected, PeopleBg } from './styles'

export default function People() {
    const settings = {
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return(
        <PeopleBg id="people">
            <Slider {...settings}>
                <Content>
                    <Arrow>Arraste para o lado <Icon icon="bi:arrow-right" inline={true} /></Arrow>
                    <h3>Por que continuar?</h3>
                    <p>Arraste para o lado e descubra.</p>
                    <PageBalls>
                        <BallSelected />
                        <Ball />
                        <Ball />
                        <Ball />
                        <Ball />
                        <Ball />
                    </PageBalls>
                </Content>
                <Content black>
                    <Arrow>Arraste para o lado <Icon icon="bi:arrow-right" inline={true} /></Arrow>
                    <img src={VanGoghImg} alt="Imagem do pintor pós-impressionista holandês, Vincent Van Gogh" />
                    <h5>Vincent Van Gogh</h5>
                    <p>Van Gogh foi um pintor pós-impressionista holandês que lutou contra uma grave depressão e pobreza, aos 37 anos se suicídou por não ser reconhecido pelas suas obras.</p>
                    <PageBalls>
                        <Ball black />
                        <BallSelected black />
                        <Ball black />
                        <Ball black />
                        <Ball black />
                        <Ball black />
                    </PageBalls>
                </Content>
                <Content>
                    <Arrow>Arraste para o lado <Icon icon="bi:arrow-right" inline={true} /></Arrow>
                    <img src={VanGoghMuseumImg} alt="Imagem do pintor pós-impressionista holandês, Vincent Van Gogh" />
                    <h5>Vincent Van Gogh</h5>
                    <p>Hoje, ele é considerado um dos maiores representantes da pintura pós-impressionista e suas obras são reconhecidas pelo mundo inteiro, além de ter um museu com apenas suas obras em Amsterdam.</p>
                    <PageBalls>
                        <Ball />
                        <Ball />
                        <BallSelected />
                        <Ball />
                        <Ball />
                        <Ball />
                    </PageBalls>
                </Content>
                <Content black>
                    <Arrow>Arraste para o lado <Icon icon="bi:arrow-right" inline={true} /></Arrow>
                    <img src={GaulesImg} alt="Imagem do streamer brasileiro, Gaules" />
                    <h5>Gaules</h5>
                    <p>Alexandre Borba Chiqueta, mais conhecido como Gaules, foi diagnosticado com depressão e tentou suicídio em dezembro de 2017.</p>
                    <PageBalls>
                        <Ball black />
                        <Ball black  />
                        <Ball black />
                        <BallSelected black />
                        <Ball black />
                        <Ball black />
                    </PageBalls>
                </Content>
                <Content>
                    <Arrow>Arraste para o lado <Icon icon="bi:arrow-right" inline={true} /></Arrow>
                    <img src={GaulesAwardImg} alt="Imagem do streamer brasileiro, Gaules" />
                    <h5>Gaules</h5>
                    <p>Atualmente, ele é o maior streamer brasileiro. Além de quebrar o recorde de espectadores simultâneos na Twitch, chegando a 393,263 mil espectadores.</p>
                    <PageBalls>
                        <Ball />
                        <Ball />
                        <Ball />
                        <Ball />
                        <BallSelected />
                        <Ball />
                    </PageBalls>
                </Content>
                <Content>
                    <h5>A morte nunca é uma escapatória...</h5>
                    <p>"A tempestade sempre passa."</p>
                    <PageBalls>
                        <Ball />
                        <Ball />
                        <Ball />
                        <Ball />
                        <Ball />
                        <BallSelected />
                    </PageBalls>
                </Content>
            </Slider>
        </PeopleBg>
    )
}