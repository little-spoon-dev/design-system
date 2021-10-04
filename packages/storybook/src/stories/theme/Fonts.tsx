import Divider from '@littlespoon/divider/src'
import { primary, secondary } from '@littlespoon/theme/src/fonts'
import { Fragment } from 'react'

interface Props {
  Body?: typeof primary
  Heading?: typeof secondary
}

export default function Fonts(props: Props) {
  const styleKey = props.Body ? 'Body' : 'Heading'
  const styles = props.Body || props.Heading

  if (!styles) {
    return null
  }

  const fontFamily = styles.family

  return (
    <main>
      <h1
        style={{
          ...secondary.heading.h1,
          fontFamily,
        }}
      >
        {styleKey}
      </h1>

      <h2
        style={{
          ...secondary.heading.h3,
          fontFamily,
        }}
      >
        Font: {getFontName(fontFamily)}
      </h2>

      {Object.entries(styles).map(([groupKey, group]) => {
        if (groupKey === 'weight' || groupKey === 'family') {
          return null
        }

        return Object.entries<Record<string, Record<string, string>>>(group).map(
          ([variantKey, variant]) => (
            <Fragment key={variantKey}>
              <p>
                {Object.entries(styles.weight).map(([weightKey, fontWeight]) => (
                  <Fragment key={weightKey}>
                    <span
                      style={{
                        ...variant,
                        fontFamily,
                        fontWeight,
                      }}
                    >
                      {displayText(styleKey, groupKey, variantKey)}
                    </span>

                    <br />
                  </Fragment>
                ))}
              </p>

              <Divider />
            </Fragment>
          ),
        )
      })}
    </main>
  )
}

function getFontName(font: string): string {
  const match = font.match(/^(\w+), sans-serif/)
  if (match) {
    return match[1]
  }
  return ''
}

const bodyText = 'The quick brown fox jumps over the lazy dog.'

function displayText(styleKey: string, groupKey: string, variantKey: string): string {
  if (styleKey === 'Heading' || groupKey === 'button') {
    return `${variantKey} ${groupKey}`
  }
  return bodyText
}
