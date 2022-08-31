import { Container } from './styles';
import { BsPlusCircleFill } from 'react-icons/bs'
import { BtnPrimary } from '../../styles/buttons';


function Genre() {
  return (
    <Container>
      
      <h2>Favourit genres</h2>
      
      {/* colocar um state rodando um map pra fazer os generos */}
      <ul>
        <li>
          <BtnPrimary padding='small'>
            Action
          </BtnPrimary>
        </li>
        <li>
          <BtnPrimary padding='small'>
            Drama
          </BtnPrimary>  
        </li>
        <li>
          <BtnPrimary padding='small'>
            Adventures
          </BtnPrimary> 
        </li>
        <li>
          <BtnPrimary padding='small'>
            Comedy
          </BtnPrimary> 
        </li>
        <li>
          <BtnPrimary padding='small'>
            Sci-Fi
          </BtnPrimary> 
        </li>
      </ul>

      <button className='genre-add-button'>
        <BsPlusCircleFill color='white' fontSize={20}/>
        <p>Add you favourite genres</p>
      </button>
      
    </Container>

  );
};
export default Genre;