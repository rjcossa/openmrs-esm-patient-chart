import React from "react";
import OrderBasketItemTile from "./order-basket-item.component";
import styles from "./order-basket-item-list.scss";
import { useTranslation } from "react-i18next";
import { OrderBasketItem } from "../types/order-basket-item";

export interface OrderBasketItemListProps {
  orderBasketItems: Array<OrderBasketItem>;
  onItemClicked: (order: OrderBasketItem) => void;
  onItemRemoveClicked: (order: OrderBasketItem) => void;
}

export default function OrderBasketItemList({
  orderBasketItems,
  onItemClicked,
  onItemRemoveClicked,
}: OrderBasketItemListProps) {
  const { t } = useTranslation();
  const newOrderBasketItems = orderBasketItems.filter(
    (x) => x.action === "NEW"
  );
  const renewedOrderBasketItems = orderBasketItems.filter(
    (x) => x.action === "RENEWED"
  );
  const revisedOrderBasketItems = orderBasketItems.filter(
    (x) => x.action === "REVISE"
  );
  const discontinuedOrderBasketItems = orderBasketItems.filter(
    (x) => x.action === "DISCONTINUE"
  );

  return (
    <>
      <h3 className={styles.productiveHeading02}>
        {t("orderBasket", "Order Basket")}
      </h3>
      {orderBasketItems.length === 0 && (
        <p>
          {t("emptyMedicationOrderBasket", "Your basket is currently empty.")}
        </p>
      )}

      {newOrderBasketItems.length > 0 && (
        <>
          <h4 className={styles.orderCategoryHeading}>
            {t("newOrders", "{count} new order(s)", {
              count: newOrderBasketItems.length,
            })}
          </h4>
          {newOrderBasketItems.map((order, index) => (
            <OrderBasketItemTile
              key={index}
              orderBasketItem={order}
              onClick={() => onItemClicked(order)}
              onRemoveClick={() => onItemRemoveClicked(order)}
            />
          ))}
        </>
      )}

      {renewedOrderBasketItems.length > 0 && (
        <>
          <h4 className={styles.orderCategoryHeading}>
            {t("renewedOrders", "{count} order(s) being renewed (continued)", {
              count: renewedOrderBasketItems.length,
            })}
          </h4>
          {renewedOrderBasketItems.map((item, index) => (
            <OrderBasketItemTile
              key={index}
              orderBasketItem={item}
              onClick={() => onItemClicked(item)}
              onRemoveClick={() => onItemRemoveClicked(item)}
            />
          ))}
        </>
      )}

      {revisedOrderBasketItems.length > 0 && (
        <>
          <h4 className={styles.orderCategoryHeading}>
            {t("revisedOrders", "{count} order(s) being modified (revised)", {
              count: revisedOrderBasketItems.length,
            })}
          </h4>
          {revisedOrderBasketItems.map((item, index) => (
            <OrderBasketItemTile
              key={index}
              orderBasketItem={item}
              onClick={() => onItemClicked(item)}
              onRemoveClick={() => onItemRemoveClicked(item)}
            />
          ))}
        </>
      )}

      {discontinuedOrderBasketItems.length > 0 && (
        <>
          <h4 className={styles.orderCategoryHeading}>
            {t("discontinuedOrders", "{count} discontinued order(s)", {
              count: discontinuedOrderBasketItems.length,
            })}
          </h4>
          {discontinuedOrderBasketItems.map((item, index) => (
            <OrderBasketItemTile
              key={index}
              orderBasketItem={item}
              onClick={() => onItemClicked(item)}
              onRemoveClick={() => onItemRemoveClicked(item)}
            />
          ))}
        </>
      )}
    </>
  );
}
