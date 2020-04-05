import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import LazyImage from '../../components/LazyImage';

import {
  Container,
  InputContainer,
  Input,
  SearchIcon,
  Header,
  PromoBoard,
  PromoBoardImage,
  CategoryPanel,
  IconBoard,
  IconImage,
  IconLabel,
} from './styles';

import autoEscolaImg from '../../assets/resources/auto-escola.png';
import bares from '../../assets/resources/bares.png';
import beleza from '../../assets/resources/beleza.png';
import clinica from '../../assets/resources/clinica.png';
import delivery from '../../assets/resources/delivery.png';
import doces from '../../assets/resources/doces.png';
import farmacias from '../../assets/resources/farmacias.png';
import lanches from '../../assets/resources/lanches.png';
import medicos from '../../assets/resources/medicos.png';
import moda from '../../assets/resources/moda.png';
import oticas from '../../assets/resources/oticas.png';
import petshops from '../../assets/resources/petshops.png';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function Home() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  async function refreshPage() {
    loadFeed();
  }

  async function loadFeed() {
    setLoading(true);
    const response = await fetch(
      'http://localhost:3000/feed/?_expand=author&_limit=3&_page=1',
    );
    const data = await response.json();
    setFeed(data);
    setLoading(false);
  }

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <FlatList
      data={[1]}
      keyExtractor={item => item.id}
      refreshing={loading}
      onRefresh={refreshPage}
      renderItem={({item}) => (
        <Container>
          <InputContainer>
            <SearchIcon name="search" size={24} color="#484848" />
            <Input placeholder="O que você procura?" />
          </InputContainer>
          <Header>Destaques</Header>
          <FlatList
            data={feed}
            keyExtractor={post => String(post.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <PromoBoard>
                <LazyImage
                  aspectRatio={item.aspectRatio}
                  smallSource={{uri: item.small}}
                  source={{uri: item.image}}
                />
              </PromoBoard>
            )}
          />
          <Header>Categorias</Header>
          <CategoryPanel>
            <IconBoard>
              <IconImage source={autoEscolaImg} />
              <IconLabel>Auto Escolas</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={bares} />
              <IconLabel>Bares</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={beleza} />
              <IconLabel>Beleza e Estética</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={clinica} />
              <IconLabel>Clínicas</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={delivery} />
              <IconLabel>Delivery</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={doces} />
              <IconLabel>Doces</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={farmacias} />
              <IconLabel>Farmácias</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={lanches} />
              <IconLabel>Lanches</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={medicos} />
              <IconLabel>Médicos</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={moda} />
              <IconLabel>Moda</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={oticas} />
              <IconLabel>Óticas</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={petshops} />
              <IconLabel>Petshops</IconLabel>
            </IconBoard>
            {/* <IconBoard>
              <IconImage source={} />
              <IconLabel>Mercado</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={} />
              <IconLabel>Taxistas</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={} />
              <IconLabel>Motoboys</IconLabel>
            </IconBoard>
            <IconBoard>
              <IconImage source={} />
              <IconLabel>Escolas</IconLabel>
            </IconBoard> */}
          </CategoryPanel>
        </Container>
      )}
    />
  );
}
