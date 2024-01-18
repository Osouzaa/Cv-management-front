
import * as C from "./style";

interface ICardProps {
    title: string;
    img: string;
    alt: string;
    onClick?: () => void ;
}


const CardModal = ({img, title, alt, onClick}: ICardProps) => {
  return (
    <C.ContentImports>
      <div>
        <C.Paragraph>{title}</C.Paragraph>
      </div>
      <C.Buttons>
        <img src={img} alt={alt} onClick={onClick}/>
      </C.Buttons>
    </C.ContentImports>
  );
};

export { CardModal };
