import React, { useCallback, useEffect } from "react"

import ModelContext from "./ModelContext"

export default function useModel(modelName: string) {
    const { registerModel, unregisterModel, getModelByName } = React.useContext(
        ModelContext
    )

    useEffect(() => () => unregisterModel(modelName), [
        modelName,
        unregisterModel
    ])

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])

    return { registerModel, getModel }
}

