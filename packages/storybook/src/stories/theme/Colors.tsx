import Divider from '@littlespoon/divider/src'
import { primary } from '@littlespoon/theme/src/fonts'
import { Fragment } from 'react'
import rgb2hex from 'rgb2hex'

interface Props {
  color: {
    [group: string]: {
      [key: string]: string | (() => string)
    }
  }
}

export default function Colors(props: Props) {
  const lastIndex = Object.keys(props.color).length - 1

  return (
    <main style={{ ...primary.paragraph.large }}>
      {Object.entries(props.color).map(([colorGroup, colors], index) => (
        <Fragment key={colorGroup}>
          <section style={{ marginBottom: '2rem' }}>
            <h1>{colorGroup}</h1>

            <table>
              {Object.entries(colors).map(([colorKey, color]) => {
                color = typeof color === 'function' ? color() : color
                const { hex, alpha } = rgb2hex(color)

                return (
                  <tr key={colorKey}>
                    <td
                      style={{
                        backgroundColor: color,
                        height: 100,
                        width: 100,
                      }}
                    />

                    <td style={{ padding: '1rem' }}>
                      <code>
                        {hex.toUpperCase()}
                        {alpha !== 1 && ` (${alpha * 100}%)`}
                      </code>
                      {color !== hex && (
                        <>
                          <br />
                          <code>{color}</code>
                        </>
                      )}
                    </td>

                    <td>{colorKey}</td>
                  </tr>
                )
              })}
            </table>
          </section>

          {index !== lastIndex && <Divider />}
        </Fragment>
      ))}
    </main>
  )
}
