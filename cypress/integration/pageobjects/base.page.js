class BasePage {
  OpenURL (url) {
    if (url === undefined) {
      throw new Error('url must be defined')
    }
    try {
      browser.url(url)
    } catch (err) {
      throw new Error(err)
    }
  }

  Click (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return cy.get(locator).click();
  }

  FirstInstanceOf (possibleArray) {
    if (Array.isArray(possibleArray)) {
      return possibleArray[0]
    }
    return possibleArray
  }

  GetAttribute (locator, attr) {
    if (locator === undefined || attr === undefined) {
      throw new Error('locator/attribute must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).getAttribute(attr)
    } catch (err) {
      throw new Error(err)
    }
  }

  GenericSendKeys (locator, text) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).click()
      browser.keys(text)
    } catch (err) {
      throw new Error(err)
    }
  }

  SetValue (locator, value) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).setValue(value)
    } catch (err) {
      throw new Error(err)
    }
  }

  AddValue (locator, value) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).addValue(value)
    } catch (err) {
      throw new Error(err)
    }
  }

  CloseBrowser () {
    $(locator).close()
  }

  ToggleON (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).rightClick(locator)
    } catch (err) {
      throw new Error(err)
    }
  }

  SelectCheckBox (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      if (!$(locator).isSelected()) {
        $(locator).click()
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  ScrollIntoView (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).scrollIntoView(scrollIntoViewOptions)
    } catch (err) {
      throw new Error(err)
    }
  }

  MouseHover (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).moveTo()
      browser.pause(2000)
    } catch (err) {
      throw new Error(err)
    }
  }

  ClickByOffset (locator, x, y) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }

    try {
      $(locator).waitForDisplayed(WAITFOR_TIMEOUT)
      $(locator).leftClick(x, y)
    } catch (err) {
      throw new Error(err)
    }
  }

  // Example to below such method
  // | textToEnter         | locator   |
  // |  CTA label          | CTA label field |
  // |  /content           | CTA URL field |
  EnterValueInMultipleTextFields (fields) {
    try {
      const fieldsTemp = fields.hashes()
      fieldsTemp.array.forEach((element) => {
        browser.setValue(element.textToEnter, element.locator)
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  CloseLastOpenWindow () {
    try {
      const whandler = browser.windowHandles()
      const lastWindowHandle = whandler.value.slice(-1)
      browser.window(lastWindowHandle[0])
      browser.close()
    } catch (err) {
      throw new Error(err)
    }
  }

  IsElementDisplayed (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return $(locator).isDisplayed()
  }

  IsElementVisible (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return $(locator).isVisible()
  }

  SelectByValueDropdown (locator, value) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    $(locator).selectByAttribute('value', value)
  }

  AddTimeStamp () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const timeStamp = `${year}${month}${day}${hour}${minutes}${seconds}`
    return timeStamp
  }

  GetText (locator) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return $(locator).getText()
  }

  WaitForElementToBeEnabled (locator, timeToWait = global.WAITFOR_TIMEOUT) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return $(locator).waitForEnabled(timeToWait)
  }

  WaitForElementToBeDisplayed (locator, timeToWait = global.WAITFOR_TIMEOUT) {
    if (locator === undefined) {
      throw new Error('locator must be defined')
    }
    return $(locator).waitForDisplayed(timeToWait)
  }
}

export const basePage = new BasePage()
