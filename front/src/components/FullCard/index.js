import styled from 'styled-components';
import Button from '../Button';

const Modal = styled.div`
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.modal-main {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  transition: 0.25s ease-in-out;
  box-sizing: border-box;
  position:fixed;
  background-color: #b8c7de;
  width: 50%;
  height: 70%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

 ${'' /* TODO: check this */}
@media (max-width: 1080) { 
  .modal-main {
    width: 66%;
  }
}

@media (max-width: 540) { 
  .modal-main {
    width: 75%;
  }
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}

.modal-buttons {

}

`;

const Index = function ({ handleClose, handleComplete, show, children }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <Modal>
      <div className={showHideClassName}>
        <div className="modal-main">
          {children}
          <div className="modal-buttons">
            <Button type="button" onClick={handleComplete}>
              Complete
            </Button>
            <Button type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Index;
