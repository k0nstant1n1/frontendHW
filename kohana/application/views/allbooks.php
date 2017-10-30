<table border="1">
    <thead>
    <th>Название</th>
    <th>Автор</th>
    </thead>
    <tbody>
    <?php foreach ($books as $book => $author) { ?>
        <tr>
            <td><?php echo $book?></td>
            <td><?php echo $author?></td>
        </tr>
    <?php }; ?>
    </tbody>
</table>