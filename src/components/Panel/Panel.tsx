
import styled from "styled-components";

interface PanelProps {
  handleMinusPage: () => void;
  handlePlusPage: () => void;
  handleMinusLang: () => void;
  handlePlusLang: () => void;
  page: number;
  language: number;
}

const Panel: React.FC<PanelProps> = ({
  handleMinusPage,
  handlePlusPage,
  handleMinusLang,
  handlePlusLang,
  page,
  language
}) => {
  const Styled = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
  `;

  const StyledLabel = styled.label`
    display: flex;
  `;

  //Page


  return (
    <Styled>
      <StyledLabel htmlFor="">
        <p className="text-neutral-content">Número de páginas</p>
        <button className="text-neutral-content m-2" onClick={handleMinusPage}>
          -
        </button>
        <input
          type="text"
          defaultValue={page}
          className="input input-bordered text-center w-10 input-xs max-w-xs"
          readOnly
        />
        <button className="text-neutral-content m-2" onClick={handlePlusPage}>
          +
        </button>
      </StyledLabel>
      <StyledLabel htmlFor="">
        <p className="text-neutral-content">Número de lenguajes</p>
        <button className="text-neutral-content m-2" onClick={handleMinusLang}> 
          -
        </button>
        <input
          type="text"
          defaultValue={language}
          className="input input-bordered text-center w-10 input-xs max-w-xs"
          readOnly
        />
        <button className="text-neutral-content m-2" onClick={handlePlusLang}>
          +
        </button>
      </StyledLabel>
    </Styled>
  );
};

export default Panel;
