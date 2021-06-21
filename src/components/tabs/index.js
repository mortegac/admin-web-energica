import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../../css/components/tabs.css'

export const VerticalTabs = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-row items-start justify-start tabs">
      <div className="flex-shrink-0">
        <div className="flex flex-wrap flex-col space-y-2">
          {tabs.map((tab, key) => (
            <button
              key={key}
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={`tab tab-pill ${
                openTab === tab.index ? 'tab-active' : ''
              }`}
              type="button">
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-0">
        {tabs.map((tab, key) => (
          <div
            key={key}
            className={`tab-content ${
              openTab !== tab.index ? 'hidden' : 'block'
            }`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

VerticalTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}

export const Pills = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-wrap flex-col w-full tabs">
      <div className="flex lg:flex-wrap flex-row lg:space-x-2">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={`tab tab-pill ${
                openTab === tab.index ? 'tab-active' : ''
              }`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

Pills.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}

export const IconTabs = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-wrap flex-col w-full tabs">
      <div className="flex lg:flex-wrap flex-row lg:space-x-2">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={`tab rounded-lg flex flex-row items-center justify-around ${
                openTab === tab.index ? 'tab-active' : ''
              }`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

IconTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}

export const UnderlinedTabs = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-wrap flex-col w-full tabs">
      <div className="flex lg:flex-wrap flex-row lg:space-x-2">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index);
              }}
              className={
                openTab === tab.index
                  ? 'tab tab-underline tab-active'
                  : 'tab tab-underline'
              }
              type="button">
                <div className="w-1/4">
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <div className="text-2xl">{'45'}</div>
                    <div className="text-sm text-grey-500">{tab.title}</div>
                  </div>
                </div>

            </button>
          </div>
        ))}
      </div>
      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

UnderlinedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}

export const DefaultTabs = ({tabs}) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="flex flex-wrap flex-col w-full tabs">
      <div className="flex lg:flex-wrap flex-row lg:space-x-2">
        {tabs.map((tab, key) => (
          <div key={key} className="flex-none">
            <button
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={`tab ${openTab === tab.index ? 'tab-active' : ''}`}
              type="button">
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      {tabs.map((tab, key) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}

DefaultTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any
    })
  ).isRequired
}
