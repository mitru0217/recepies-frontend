import RingLoader from 'react-spinners/PuffLoader';
import { LoaderWrap, Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <LoaderWrap>
        <RingLoader color="#8BAA36" size={85} />
      </LoaderWrap>
    </Backdrop>
  );
};

export default Loader;
