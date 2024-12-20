import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/Store/StoreItem";

export default function Store() {
	return (
		<>
			<Row md={2} xs={1} lg={3} className="g-3">
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
						{/* {JSON.stringify(item)} */}
					</Col>
				))}
			</Row>
		</>
	);
}
