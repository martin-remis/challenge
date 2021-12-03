import styled from "styled-components";

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
  position:fixed;
  background: white;
  width: 80%;
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

const Index = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Modal>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </Modal>
  );
};

export default Index;
