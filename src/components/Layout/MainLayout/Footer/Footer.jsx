import  FooterCss from "./footer.module.css"

const Footer = () => {
  return (
    <div className={FooterCss.footerhead}>
        <div className={FooterCss.btnDiv}>
        <button className={`${FooterCss.btn} ${FooterCss.btnPrevious}`}>Previous</button>
        <button className={`${FooterCss.btn} ${FooterCss.btnNext}`}>Next »</button>
        </div>
    </div>
  )
}

export default Footer