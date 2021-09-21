import { Fragment } from 'react'
import { grey10, grey20 } from '@littlespoon/theme/lib/colors/secondary'

interface Props {
  color: {
    [group: string]: {
      [key: string]: string | (() => string)
    }
  }
}

export default function Colors(props: Props) {
  return (
    <>
      {Object.entries(props.color).map(([colorGroup, colors], index) => (
        <Fragment key={colorGroup}>
          {index > 0 && <hr />}

          <section>
            <h1>{colorGroup}</h1>

            <ul style={{ listStyle: 'none' }}>
              {Object.entries(colors).map(([colorKey, color]) => (
                <li key={colorKey} style={{ display: 'flex' }}>
                  <div
                    style={{
                      backgroundColor: typeof color === 'function' ? color() : color,
                      display: 'inline-block',
                      height: 100,
                      marginRight: '1rem',
                      width: 100,
                    }}
                  />

                  <div>
                    <p>
                      <strong>{colorKey}</strong>
                    </p>

                    <pre
                      style={{
                        backgroundColor: grey10(),
                        border: `.1rem solid ${grey20()}`,
                        borderRadius: 4,
                        display: 'inline',
                        fontSize: '95%',
                        padding: '.25rem .5rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <code>{typeof color === 'function' ? color() : color}</code>
                    </pre>
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
