import styled from 'styled-components';
import { css } from '@emotion/react';
import Loader from 'react-spinners/ClipLoader';

const Modal = styled.div`
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

.loader-main {
  text-align: center;
  transition: 0.25s ease-in-out;
  position:fixed;
  width: 50%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}
`;

const overrideCss = css`
  border: 15px dotted;
  border-color: #eba134;
`;

const Index = function ({ loading }) {
  const showHideClassName = loading ? 'loader display-block' : 'loader display-none';
  return (
    <Modal>
      <div className={showHideClassName}>
        <section className="loader-main">
          <Loader css={overrideCss} size={150} color="#123abc" loading={loading} speedMultiplier={0.3} />
        </section>
      </div>
    </Modal>
  );
};

export default Index;
