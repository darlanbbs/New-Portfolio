import * as C from "./styled";
export function Cards({ imageSrc, alt, title, subtitle, className }) {
  return (
    <C.CardContainer>
      <C.CardImage>
        <img src={imageSrc} alt={alt} />
      </C.CardImage>
      <C.CardDetails>
        <C.CardCenter>
          <C.CardTitle className={className}>{title}</C.CardTitle>
          <C.CardSubtitle>{subtitle}</C.CardSubtitle>
        </C.CardCenter>
      </C.CardDetails>
    </C.CardContainer>
  );
}
