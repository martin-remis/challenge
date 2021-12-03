import styled from "styled-components";
import Column from '../Column';

const RequestCards = styled.div`
  background-color: #eba134;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 30px;
  display: flex;
  transition: 0.25s ease-in-out;
  box-sizing: border-box;
  justify-content: space-around;
`;

const Label = styled.label`
  margin-right: 20px;
`

const InputNumber = styled.input`
  border-radius: 8px;
  text-align: center;
  min-width: 30px;
  max-width: 60px;
  :focus { 
    outline: none;
 }
`

const Index = ({ handleSubmit, quantity, handleChange }) => {
  return (
    <Column className="xl">
      <RequestCards>
        <div>
          <Label>Quantity</Label>
          <InputNumber type="text" value={quantity} onChange={handleChange} />
        </div>
        <input type="submit" value="New tasks" onClick={handleSubmit} />
      </RequestCards>
    </Column>
  );
};

export default Index;
