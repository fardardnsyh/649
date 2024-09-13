/* eslint-disable @next/next/no-img-element */
import { BLOCKS } from "@contentful/rich-text-types";
import React, { useEffect, useState} from "react";
import {HiOutlineClipboard} from "react-icons/hi";
import {BsFileCheck} from "react-icons/bs";
import copy from 'copy-to-clipboard';
import styles from "@/styles/lib/content/Options.module.css";
import {ImQuotesRight, ImQuotesLeft} from "react-icons/im"
import { FaDotCircle } from "react-icons/fa";
import ReactPlayer from 'react-player/lazy'
import Editor from '@monaco-editor/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaCircle } from "react-icons/fa";

const HeadingOne = ({children} : {children: any}) => {
    return (
        <h1 className={styles.headingOne}>{`${children.content[0].value}`}</h1>
    )
}

const HeadingTwo = ({children} : {children: any}) => {
    return (
        <h1 className={styles.headingTwo}>{`${children.content[0].value}`}</h1>
    )
}

const HeadingThree = ({children} : {children: any}) => {
    return (
        <h1 className={styles.headingThree}>{`${children.content[0].value}`}</h1>
    )
}

const Paragraph = ({children} : {children: any}) => {
    const value = children.content[0].marks.length > 0;
    return (
        <div className={styles.paragraphDiv}>
        {
            (value) ? <Code>{`${children.content[0].value}`}</Code>
            : children.content.map((child:any, index:number) => {
                if (child.nodeType === "text") {
                    return (<p key={index} className={styles.paragraph}>{`${child.value}`}</p>)
                } else {
                    return <HyperLink key={index}>{child}</HyperLink>
                }
            })
        }
        </div>
    )
}

const Code = ({children} : {children: any}) => {
    const [copyCode, setCopyCode] = useState(false)
    const firstIndex = children.split("-lanType\n")[0];
    const codeLanguage = firstIndex.slice(0, firstIndex.length - 1);

    const [ style, setStyle ] = useState({})
    useEffect(() => {
      import('react-syntax-highlighter/dist/esm/styles/hljs/ir-black')
      .then(mod => setStyle(mod.default));
    })
    return (
        <div className={styles.codeContainer}>
            <div className={styles.codeContent}>
                <p className={styles.codeContentText}>Contawo: <b>{codeLanguage}</b></p>
                {
                    copyCode ? 
                    <div className={styles.codeContentButton}>
                        <BsFileCheck className={styles.codeContentButtonIconCopied} />
                        <p className={styles.codeContentButtonTextCopied}>Copied</p>
                    </div> : 
                    <div onClick={() => {
                        copy(children);
                        setCopyCode(true);
                        setTimeout(() => {
                            setCopyCode(false);
                        }, 2000)
                    }} className={styles.codeContentButton}>
                        <HiOutlineClipboard className={styles.codeContentButtonIconCopy} />
                        <p className={styles.codeContentButtonTextCopy}>Copy</p>
                    </div>
                }
            </div>
            <SyntaxHighlighter 
                language={codeLanguage} 
                style={style} 
                customStyle={{
                    padding: "1rem",
                    borderRadius: "0 0 10px 10px",
                    fontSize: ".9rem"
                }}
                wrapLongLines={true}>
                {`${children.split("-lanType\n")[1]}`}
            </SyntaxHighlighter>
        </div>
    )
}

const Qoute = ({children} : {children: any}) => {
    return (
        <div className={styles.quote}>
            <div className={styles.quoteOpen}>
                <ImQuotesLeft className={styles.quoteIcon} />
            </div>
            <i className={styles.quoteText}>{`${children.content[0].content[0].value}`}</i>
            <div className={styles.quoteClose}>
                <ImQuotesRight className={styles.quoteIcon} />
            </div>
        </div>
    )
}

const UnList = ({children} : {children: any}) => {
    return (
        <div className={styles.unList}>
            {children.content.map((content: any, index: number) => {
                return (
                    <div key={index} className={styles.unListItem}>
                        <FaCircle className={styles.unListItemIcon} />
                        <p>{content.content[0].content[0].value}</p>
                    </div>
                )
            })}
        </div>
    )
}

const HyperLink = ({children} : {children: any}) => {
    return (
        <a className={styles.hyperLink} href={`${children.data.uri}`} target="_blank">{`${children.content[0].value}`}</a>
    )
}

const EmbeddedAsset = ({children}: {children: any}) => {
    const validate = children.data.target.fields.file.contentType.split("/")[0]
    
    return (
        <div className={styles.embedded}>
            {
                (validate === "image") ? 
                <div className={styles.embeddedContainer}>
                    <img className={styles.embeddedContainerImage} height="100%" width="100%" src={`https:${children.data.target.fields.file.url}`} alt="Image" />
                </div> 
                : 
                <div>
                    <ReactPlayer url={`https:${children.data.target.fields.file.url}`} />
                </div>
            }
        </div>
    )
}

const EmbeddedEntry = ({children} : {children: any}) => {
    return (
        <div className={styles.embeddEntry}>
            <ReactPlayer controls={true} width="100%" height="100%" url={`https:${children.data.target.fields.link}`} />
        </div>
    )
}

export const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (children : any) => <Paragraph>{children}</Paragraph>,
        [BLOCKS.HEADING_2]: (children : any) => <HeadingOne>{children}</HeadingOne>,
        [BLOCKS.HEADING_3]: (children : any) => <HeadingTwo>{children}</HeadingTwo>,
        [BLOCKS.HEADING_4]: (children : any) => <HeadingThree>{children}</HeadingThree>,
        [BLOCKS.QUOTE]: (children : any) => <Qoute>{children}</Qoute>,
        [BLOCKS.UL_LIST]: (children : any) => <UnList>{children}</UnList>,
        [BLOCKS.EMBEDDED_ASSET]: (children : any) => <EmbeddedAsset>{children}</EmbeddedAsset>,
        [BLOCKS.EMBEDDED_ENTRY]: (children : any) => <EmbeddedEntry>{children}</EmbeddedEntry>
    }
}
