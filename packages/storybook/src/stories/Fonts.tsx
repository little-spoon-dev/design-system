import { Fragment } from 'react'

interface Props {
  [style: string]: {
    [family: string]: string
    [fontWeight: string]: string
  }
}

const headingFontSize = '3.25rem'
const headingText = 'Display 01'
const bodyFontSize = '1.25rem'
const bodyText = 'The quick brown fox jumps over the lazy dog'

function fontFormat(font) {
  return font.replace(', sans-serif', '').replace(/'/g, '')
}

export default function Fonts(props: Props) {
  return (
    <>
      {Object.entries(props).map(([styleKey, styles], index) => (
        <Fragment key={styleKey}>
          {index > 0 && <hr />}
          <section>
            <div>
              <h1 style={{ fontFamily: styles.family, fontSize: '4.125rem' }}>{styleKey}</h1>
            </div>
            <div>
              <h2 style={{ marginLeft: '12px' }}>{'Font: ' + fontFormat(styles.family)}</h2>
            </div>
            <ul style={{ listStyle: 'none' }}>
              {Object.entries(styles.weight).map(([weightKey, weightValue]) => (
                <li key={weightKey}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontFamily: styles.family,
                      fontWeight: weightValue,
                      fontSize: styleKey === 'Body' ? bodyFontSize : headingFontSize,
                      margin: '1rem',
                    }}
                  >
                    <span>{styleKey === 'Body' ? bodyText : headingText}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Fragment>
      ))}
    </>
  )
}
