package com.tiffinbox.backend.repositories;

import com.tiffinbox.backend.models.Order;
import com.tiffinbox.backend.models.User;
import com.tiffinbox.backend.utils.OrderStatus;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Author: Raj Kamlesh Patel
 * Banner ID: B00978721
 * Email: rj227488@dal.ca
 */

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findAllByCustomer(User customer, Sort sort);
    List<Order> findAllByFoodServiceProviderAndOrderStatusIn(User foodServiceProvider, List<OrderStatus> orderStatuses);
    Optional<Order> findByOrderIdAndFoodServiceProvider(String orderId, User foodServiceProvider);
    @Query("{ 'foodServiceProvider' : ?0, 'orderStatus' : ?1, 'orderDate' : { $gte: ?2, $lt: ?3 }}")
    List<Order> findAllByFoodServiceProviderAndOrderStatus(String foodServiceProviderId, OrderStatus orderStatus, LocalDateTime startOfDay,LocalDateTime endOfDay, Sort sort);
}
