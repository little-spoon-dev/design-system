import { Fragment } from 'react'

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
                <li key={colorKey}>
                  <div
                    style={{
                      backgroundColor: typeof color === 'function' ? color() : color,
                      display: 'inline-block',
                      height: 100,
                      marginRight: '1rem',
                      width: 100,
                    }}
                  />
                  <span>{colorKey}</span>
                </li>
              ))}
            </ul>
          </section>
        </Fragment>
      ))}
    </>
  )
}
