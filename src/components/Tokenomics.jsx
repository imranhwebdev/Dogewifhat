import {React, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import tokenLogo1 from '../assets/img/tokenLogo1.svg';
import tokenLogo2 from '../assets/img/symbol.svg';
import documentCopy from '../assets/img/document-copy.svg';
import { FaClipboardCheck  } from "react-icons/fa";
import CommonTitle from './CommonTitle';
export default function Tokenomics() {
    const [textToCopy, setTextToCopy] = useState('0x865331a601F129540b6F70a9fCA2Ba9Dd71de298');
    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setIsCopied(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };


    const title = "Tokenomics";
    const desc = "Founders like you. they buy they sale their Dogewifhat 2.0";
    const singleItems = [
        {
            title: "Total Supply",
            logo: tokenLogo1,
            value: "676,602,254",
        },
        {
            title: "Symbol",
            logo: tokenLogo2,
            value: "$SOLAMA",
        },
        {
            desc: "LP Tokens are burnt, and contract ownership is renounced."
        },
    ];

    const tokenTitle1 = "Total Name";
    const tokenTitle2 = "Token Address";
    const value2 = "PHONKE FORK";
  return (
    <section className='tokenomicsArea'>
      <Container>
        <Row>
            <Col>
                <CommonTitle title="Tokenomics" des="Founders like you. they buy they sale their Dogewifhat 2.0" />
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="tokenDetails">
                    <div className="singleItem-wrapper">
                        {singleItems.map((singleItem, index) => (
                            <div className="singleItem" key={index}>
                                {singleItem.desc ? (
                                    <p className='desc text-center'>{singleItem.desc}</p>
                                    ) : (
                                        <div className="singleItemContent">
                                            <div className='top d-flex align-items-center justify-content-between'>
                                                <h5>{singleItem.title}</h5>
                                                <figure>
                                                    <img src={singleItem.logo} alt="" />
                                                </figure>
                                            </div>
                                            <div className='bottom'>
                                                <span>{singleItem.value}</span>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                    <div className="singleItem d-flex large">
                        <h5>{tokenTitle1}</h5>
                        <span>{value2}</span>
                    </div> 
                    <div className="singleItem large d-flex align-items-center align-items-center">
                        <h5>{tokenTitle2}</h5>
                        <div className="tokenomics_copyTxt copytoclipboard">
                            <span className='c_title'></span> <input readOnly type="text"  value={textToCopy}
                                onChange={(e) => setTextToCopy(e.target.value)}/>
                            <button onClick={handleCopyToClipboard}>
                                {!isCopied && (
                                <span>
                                    <img src={documentCopy} alt="Copy Text" />
                                </span>
                                )}
                                {isCopied && (
                                <span className='copyed'>
                                    <FaClipboardCheck  />
                                </span>
                                )}
                            </button>
                        </div>
                    </div>  
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
