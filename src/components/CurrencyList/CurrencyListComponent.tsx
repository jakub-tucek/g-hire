import React, {ReactEventHandler} from 'react';
import {CurrencyModel} from "../../domain/CurrencyModel";
import './CurrencyListComponent.css'
import {FallbackImageComponent} from "../FallbackImage/FallbackImageComponent";

/**
 * Take first two letters, lowercase and put into url to the flag folder
 * @param currencyId currency id
 */
const createFlagUrlFromCurrencyId = (currencyId: string) => "/flags/" + currencyId.slice(0, 2).toLocaleLowerCase() + ".png"

export function CurrencyListComponent(props: { currencies: CurrencyModel[] }) {
    const renderedCurrencies = props.currencies
        .filter(i => i.exchangeRate)
        .map(currency => {
            return (
                <div className="container" key={"currency-" + currency.currency}>
                    <div className="row currency-row">
                        <div className="currency-name-flag">
                            <div className="currency-flag">
                                {currency.flags && currency.flags.length && currency.flags[0] === "provided" &&
                                <div className="currency-image-wrapper">
                                    <FallbackImageComponent imageAlt={currency.nameI18N || currency.currency}
                                                            imageUrl={createFlagUrlFromCurrencyId(currency.currency)}
                                    />
                                </div>
                                }
                            </div>
                            <div className="currency-name">
                                {currency.nameI18N && (
                                    <span>{currency.nameI18N} (<b>{currency.currency}</b>)</span>)}
                                {!currency.nameI18N && <b>{currency.currency}</b>}
                            </div>
                        </div>
                        <div className="currency-rate">{currency.exchangeRate?.middle} EUR</div>
                    </div>
                </div>
            )
        })
    return (<>{renderedCurrencies}</>);
}
