import { Fragment } from 'react'
import { secondary } from '@littlespoon/theme/lib/fonts'

interface Props {
  [style: string]: {
    family: string
    weight: {
      [weight: string]: number
    }
  }
}

const bodyText = 'The quick brown fox jumps over the lazy dog'

function fontFormat(font: string) {
  return font.replace(', sans-serif', '').replace(/'/g, '')
}

function displayText(style, variant) {
  const buttonVariants = ['button1', 'button2', 'button3', 'button4']
  if ((style === 'Body' && buttonVariants.includes(variant)) || style === 'Heading') {
    return variant
  } else {
    return bodyText
  }
}

export default function Fonts(props: Props) {
  return (
    <>
      {Object.entries(props).map(([styleKey, styles], index) => (
        <Fragment key={styleKey}>
          {index > 0 && <hr />}
          <section>
            <div>
              <h1 style={{ fontFamily: styles.family, fontSize: secondary.h2.fontSize }}>
                {styleKey}
              </h1>
            </div>
            <div>
              <h2 style={{ marginLeft: '1.2rem', fontFamily: styles.family }}>
                {'Font: ' + fontFormat(styles.family)}
              </h2>
            </div>
            <ul style={{ listStyle: 'none' }}>
              {Object.entries(styles).map(([variantKey, variantValue]) => {
                if (!(variantKey === 'weight' || variantKey === 'family')) {
                  return (
                    <div style={{ margin: '3rem 0 3rem 0' }}>
                      {Object.entries(styles.weight).map(([weightKey, weightValue]) => (
                        <li key={weightKey}>
                          <div
                            style={{
                              display: 'inline-block',
                              fontFamily: styles.family,
                              fontWeight: weightValue,
                              fontSize: variantValue.fontSize,
                              margin: '.75rem',
                            }}
                          >
                            <span>{displayText(styleKey, variantKey)}</span>
                          </div>
                        </li>
                      ))}
                    </div>
                  )
                }
              })}
            </ul>
          </section>
        </Fragment>
      ))}
    </>
  )
}
