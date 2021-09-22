import { secondary } from '@littlespoon/theme/lib/fonts'
import { Fragment } from 'react'

interface Props {
  [style: string]: {
    family: string
    [variantGroup: string]: {
      [variant: string]: {
        fontSize: string
        lineHeight: string
        letterSpacing?: string
      }
    }
    weight: {
      [weight: string]: number
    }
  }
}

const bodyText = 'The quick brown fox jumps over the lazy dog'

function fontFormat(font: string) {
  return font.replace(', sans-serif', '').replace(/'/g, '')
}

function displayText(style, variantGroup, variant) {
  if (variantGroup === 'button' || style === 'Heading') {
    return variant + ' ' + variantGroup
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
              <h1
                style={{ fontFamily: styles.family, fontSize: secondary.heading.medium.fontSize }}
              >
                {styleKey}
              </h1>
            </div>
            <div>
              <h2 style={{ marginLeft: '1.2rem', fontFamily: styles.family }}>
                {'Font: ' + fontFormat(styles.family)}
              </h2>
            </div>
            <ul style={{ listStyle: 'none' }}>
              {Object.entries(styles).map(([variantGroupKey, variantGroup]) => {
                if (!(variantGroupKey === 'weight' || variantGroupKey === 'family')) {
                  return Object.entries(variantGroup).map(([variant, variantValues]) => {
                    return (
                      <div style={{ margin: '3em 0 3rem 0' }}>
                        {Object.entries(styles.weight).map(([weightKey, weightValue]) => (
                          <li key={weightKey}>
                            <div
                              style={{
                                ...variantValues,
                                display: 'inline-block',
                                fontFamily: styles.family,
                                fontWeight: weightValue,
                              }}
                            >
                              <span>{displayText(styleKey, variantGroupKey, variant)}</span>
                            </div>
                          </li>
                        ))}
                      </div>
                    )
                  })
                }
              })}
            </ul>
          </section>
        </Fragment>
      ))}
    </>
  )
}
